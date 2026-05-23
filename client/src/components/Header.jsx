import { NavLink } from 'react-router-dom'
import GlobalSearch from './GlobalSearch.jsx'

export default function Header() {
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
      </nav>
    </header>
  )
}
