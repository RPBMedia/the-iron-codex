import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import GlobalSearch from './GlobalSearch.jsx'
import { useAuth } from '../lib/auth.jsx'

const primaryNavigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'Events', to: '/events' },
  { label: 'Locations', to: '/locations' },
  { label: 'People', to: '/people' },
  { label: 'Artifacts', to: '/artifacts' },
  { label: 'Index', to: '/index' }
]

export default function Header() {
  const { isAuthenticated, isLoading, signOut, user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const displayName = userDisplayName(user)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    function handlePointerDown(event) {
      if (
        !menuRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  async function handleLogout() {
    await signOut()
    setIsMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark" aria-hidden="true">
          <span></span>
        </span>
        <span>
          <strong>The Iron Codex</strong>
          <small>The European Middle Ages (476 - 1453)</small>
        </span>
      </Link>

      <GlobalSearch />

      <div className="header-actions">
        {!isLoading && isAuthenticated && (
          <span className="account-chip" title={displayName}>
            {user.avatar && <img src={user.avatar} alt="" loading="lazy" />}
            <span>{displayName}</span>
          </span>
        )}
        {isLoading && <span className="account-chip">Checking account...</span>}

        <button
          ref={buttonRef}
          type="button"
          className="menu-trigger"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true"></span>
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <nav
          ref={menuRef}
          id="site-navigation-menu"
          className="nav-menu"
          aria-label="Primary navigation"
        >
          <MenuGroup title="Main">
            {primaryNavigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </MenuGroup>

          {isAuthenticated && (
            <MenuGroup title="Private">
              <NavLink to="/favorites">Favorites</NavLink>
            </MenuGroup>
          )}

          <MenuGroup title="Account">
            {isLoading && <span className="menu-status">Checking account...</span>}
            {!isLoading && isAuthenticated && (
              <>
                <span className="menu-account">
                  {user.avatar && <img src={user.avatar} alt="" loading="lazy" />}
                  <span>Signed in as <strong>{displayName}</strong></span>
                </span>
                <button type="button" onClick={handleLogout}>Log out</button>
              </>
            )}
            {!isLoading && !isAuthenticated && (
              <>
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
              </>
            )}
          </MenuGroup>
        </nav>
      )}
    </header>
  )
}

function MenuGroup({ title, children }) {
  return (
    <section className="nav-menu-group">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function userDisplayName(user) {
  if (!user) return ''

  if (user.displayName?.trim()) {
    return user.displayName.trim()
  }

  const email = user.email?.trim()

  if (email?.includes('@')) {
    return email.split('@')[0]
  }

  return email ?? 'Account'
}
