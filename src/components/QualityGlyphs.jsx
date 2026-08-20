/* Three marks for the qualities band. They sit on the deep-blue ground, so
   the palette is teal linework with one rust accent; the node fills use the
   section ground itself so they read as punched out of it. */

const LINE = {
  fill: 'none',
  stroke: 'var(--pin-teal-soft)',
  strokeWidth: 2,
  vectorEffect: 'non-scaling-stroke',
}

/* Tolerance for ambiguity — circles that never quite agree on a centre, the
   outermost not even drawn solid. */
export function GlyphAmbiguity() {
  return (
    <svg className="quality__glyph" viewBox="0 0 200 140" aria-hidden="true">
      <circle cx="95" cy="70" r="62" {...LINE} strokeDasharray="9 9" />
      <circle cx="101" cy="64" r="46" {...LINE} stroke="var(--pin-teal-faint)" />
      <circle cx="114" cy="78" r="25" {...LINE} stroke="var(--pin-teal)" />
      <circle cx="122" cy="72" r="11" fill="var(--pin-rust-soft)" />
    </svg>
  )
}

/* Changing bases — one thing, three frames laid over it. */
export function GlyphBases() {
  return (
    <svg className="quality__glyph" viewBox="0 0 200 140" aria-hidden="true">
      <rect x="58" y="28" width="84" height="84" {...LINE}
        stroke="var(--pin-teal-faint)" strokeDasharray="9 9"
        transform="rotate(20 100 70)" />
      <rect x="58" y="28" width="84" height="84" {...LINE} />
      <rect x="58" y="28" width="84" height="84" {...LINE}
        transform="rotate(-20 100 70)" />
      <circle cx="100" cy="70" r="11" fill="var(--pin-rust-soft)" />
    </svg>
  )
}

/* Fluency in complex systems — a graph where one node holds the traffic. */
export function GlyphSystems() {
  const NODE = { r: 10, fill: 'var(--color-deep-bg)', stroke: 'var(--pin-teal-soft)',
    strokeWidth: 2, vectorEffect: 'non-scaling-stroke' }
  return (
    <svg className="quality__glyph" viewBox="0 0 200 140" aria-hidden="true">
      <g {...LINE}>
        <path d="M24 22 L96 66 M24 22 L24 114 M24 114 L96 66" />
        <path d="M96 66 L176 16 M176 16 L182 82 M96 66 L182 82" />
        <path d="M96 66 L124 126 M124 126 L182 82" />
      </g>
      <circle cx="24" cy="22" {...NODE} />
      <circle cx="176" cy="16" {...NODE} />
      <circle cx="24" cy="114" {...NODE} />
      <circle cx="182" cy="82" {...NODE} />
      <circle cx="124" cy="126" {...NODE} />
      <circle cx="96" cy="66" r="13" fill="var(--pin-rust-soft)" />
    </svg>
  )
}
