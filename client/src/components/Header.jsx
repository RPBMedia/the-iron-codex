import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import GlobalSearch from './GlobalSearch.jsx'
import { useAuth } from '../lib/auth.jsx'

const primaryNavigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'Events', to: '/events' },
  { label: 'Locations', to: '/locations' },
  { label: 'People', to: '/people' },
  { label: 'Houses', to: '/houses' },
  { label: 'Artifacts', to: '/artifacts' },
  { label: 'Weapons & Armor', to: '/weapons-armor' },
  { label: 'Military Orders', to: '/orders' },
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
          <svg className="brand-helm" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 22 Q17 16 24 16 L40 16 Q47 16 47 22 L46 40 Q45 49 32 50 Q19 49 18 40 Z" fill="#3d434c" stroke="#20242a" strokeWidth="1.6" />
            <path d="M23 17 Q18.5 18 18.5 23 L19.5 40 Q20 47 25.5 49.5 Q21.5 43 21.5 33 Z" fill="#565d68" opacity="0.5" />
            <path d="M41 17 Q45.5 18 45.5 23 L44.5 40 Q44 47 38.5 49.5 Q42.5 43 42.5 33 Z" fill="#2b303a" opacity="0.45" />
            <rect x="18.5" y="23" width="27" height="3.2" rx="1" fill="#4b515b" />
            <rect x="29.6" y="16.5" width="4.8" height="28" rx="1.2" fill="#4b515b" />
            <path d="M20.6 28 h8.1 v3.3 h-8.1 z M35.3 28 h8.1 v3.3 h-8.1 z" fill="#111419" />
            <circle cx="32" cy="20" r="1.05" fill="#f2c14e" />
            <circle cx="32" cy="41.5" r="1.05" fill="#f2c14e" />
            <circle cx="22.6" cy="24.6" r="1" fill="#f2c14e" />
            <circle cx="41.4" cy="24.6" r="1" fill="#f2c14e" />
            <g fill="#14181d">
              <circle cx="25.5" cy="38.6" r="1.05" /><circle cx="25.5" cy="42.4" r="1.05" /><circle cx="23.2" cy="40.5" r="1.05" /><circle cx="27.8" cy="40.5" r="1.05" />
              <circle cx="38.5" cy="38.6" r="1.05" /><circle cx="38.5" cy="42.4" r="1.05" /><circle cx="36.2" cy="40.5" r="1.05" /><circle cx="40.8" cy="40.5" r="1.05" />
            </g>
          </svg>
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
