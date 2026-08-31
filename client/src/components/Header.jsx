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
          <svg className="brand-emblem" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bm-fld" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#eff1f4" /><stop offset="0.52" stopColor="#ccd1d8" /><stop offset="1" stopColor="#a2a9b2" />
              </linearGradient>
              <linearGradient id="bm-crs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#b52734" /><stop offset="1" stopColor="#851821" />
              </linearGradient>
              <linearGradient id="bm-gls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" /><stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <clipPath id="bm-sh"><path d="M13 9 H51 Q53 9 53 11 V30 Q53 45.5 32 56 Q11 45.5 11 30 V11 Q11 9 13 9 Z" /></clipPath>
            </defs>
            <path d="M13 9 H51 Q53 9 53 11 V30 Q53 45.5 32 56 Q11 45.5 11 30 V11 Q11 9 13 9 Z" fill="url(#bm-fld)" />
            <g clipPath="url(#bm-sh)">
              <path d="M27.6 0 H36.4 V25.6 H64 V34.4 H36.4 V64 H27.6 V34.4 H0 V25.6 H27.6 Z" fill="url(#bm-crs)" />
              <path d="M27.6 0 H36.4 V25.6 H64 V34.4 H36.4 V64 H27.6 V34.4 H0 V25.6 H27.6 Z" fill="none" stroke="#6d1019" strokeWidth="0.6" strokeOpacity="0.5" />
              <rect x="0" y="0" width="64" height="33" fill="url(#bm-gls)" />
              <path d="M11 41 Q32 57 53 41 L53 58 L11 58 Z" fill="#191c22" opacity="0.16" />
            </g>
            <path d="M13 9 H51 Q53 9 53 11 V30 Q53 45.5 32 56 Q11 45.5 11 30 V11 Q11 9 13 9 Z" fill="none" stroke="#474d55" strokeWidth="2" />
            <path d="M13 9 H51 Q53 9 53 11 V30 Q53 45.5 32 56 Q11 45.5 11 30 V11 Q11 9 13 9 Z" fill="none" stroke="#e4c576" strokeWidth="0.7" strokeOpacity="0.6" />
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
