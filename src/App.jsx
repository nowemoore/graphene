import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Mark from './components/Mark.jsx'
import Programme from './views/Programme.jsx'
import './App.css'
import './styles/programme.css'
import './styles/map.css'
import { SECTIONS, NAV_SECTIONS } from './sections.js'

/* Links from the two-page era still point at `#/programme` and `#/topics`;
   send them to the equivalent anchor rather than leaving them dead. */
const LEGACY_ROUTES = { '#/programme': '', '#/topics': '#map' }

/* The hero sizes itself to the screen minus the nav. Measure the nav rather
   than hard-coding a guess, so the fit survives font loading and reflow. */
function useNavHeight() {
  useEffect(() => {
    const nav = document.querySelector('.site-nav')
    if (!nav) return
    const apply = () =>
      document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`)
    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [])
}

/* Highlights whichever section is currently under the nav. */
function useCurrentSection() {
  const [current, setCurrent] = useState(SECTIONS[0].id)

  useEffect(() => {
    const targets = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    if (!targets.length) return

    /* Track every section currently crossing the band, not just the ones
       whose state changed in a given callback — otherwise the pick depends on
       scroll timing and a section can leave the nav with nothing lit. */
    const onScreen = new Set()

    const pick = () => {
      /* The final section sits at the foot of the page, so it can never scroll
         far enough up to reach the band. Once the page bottoms out, it wins. */
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) {
        setCurrent(NAV_SECTIONS[NAV_SECTIONS.length - 1].id)
        return
      }
      const topmost = SECTIONS.find((sec) => onScreen.has(sec.id))
      if (topmost) setCurrent(topmost.highlights ?? topmost.id)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) onScreen.add(e.target.id)
          else onScreen.delete(e.target.id)
        })
        pick()
      },
      // a band just under the nav, so a section counts once it reaches the top
      { rootMargin: '-20% 0px -70% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    window.addEventListener('scroll', pick, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', pick)
    }
  }, [])

  return current
}

export default function App() {
  useNavHeight()
  const current = useCurrentSection()

  useEffect(() => {
    const redirectLegacy = () => {
      const target = LEGACY_ROUTES[window.location.hash]
      if (target !== undefined) window.location.replace(target || '#')
    }
    redirectLegacy()
    window.addEventListener('hashchange', redirectLegacy)
    return () => window.removeEventListener('hashchange', redirectLegacy)
  }, [])

  return (
    <>
      <Nav current={current} />

      <main className="site-main">
        <Programme />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="wordmark wordmark--footer smallcaps">
            <Mark className="wordmark__mark" />
            graphene
          </p>

          <div className="site-footer__meta">
            <p>&copy; 2026 Graphene</p>
            <p>
              Contact at{' '}
              <a href="mailto:nowe.moore@gmail.com">nowe.moore@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
