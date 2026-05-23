import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">IC</span>
        <span>
          <strong>The Iron Codex</strong>
          <small>476-1453</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/artifacts">Artifacts</NavLink>
      </nav>
    </header>
  )
}
