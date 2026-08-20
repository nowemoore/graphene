/* The site is one scrolling page; these are its anchors, in document order.
   `nav: false` keeps a section out of the navbar, and `highlights` says which
   nav item should light up while it is on screen. */
export const SECTIONS = [
  { id: 'about',     label: 'mission' },
  { id: 'qualities', label: 'qualities' },
  { id: 'structure', label: 'structure' },
  { id: 'map',       label: 'topics' },
  /* the project examples sit under "topics"; the faq is a drawer on the map */
  { id: 'areas',     label: 'possible projects', nav: false, highlights: 'map' },
  { id: 'apply',     label: 'apply' },
]

export const NAV_SECTIONS = SECTIONS.filter((s) => s.nav !== false)
