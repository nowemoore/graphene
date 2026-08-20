import Mark from './Mark'
import { NAV_SECTIONS } from '../sections.js'

export default function Nav({ current }) {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a className="wordmark smallcaps" href="#">
          <Mark className="wordmark__mark" />
          graphene
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link smallcaps${current === id ? ' nav-link--on' : ''}`}
              aria-current={current === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
