/* Four abstract marks, one per fellowship stage. All four share a 240x180
   viewBox and the palette's teal/rust, and they scale with their container.
   Strokes use `vector-effect` so the hairlines stay even at any size. */

const RING = { fill: 'none', strokeWidth: 4, vectorEffect: 'non-scaling-stroke' }

/* 01 — concentric rings closing on a single point: an open field narrowing
   to a scoped question. */
export function GlyphScope() {
  return (
    <svg className="step__glyph" viewBox="0 0 240 180" aria-hidden="true">
      <circle cx="120" cy="90" r="86" {...RING} stroke="var(--pin-teal-faint)" />
      <circle cx="120" cy="90" r="64" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="120" cy="90" r="42" {...RING} stroke="var(--pin-teal)" />
      <circle cx="120" cy="90" r="18" fill="var(--pin-rust)" />
    </svg>
  )
}

/* 02 — scattered rings with one filled: a match found among many. */
export function GlyphMatch() {
  return (
    <svg className="step__glyph" viewBox="0 0 240 180" aria-hidden="true">
      <circle cx="38"  cy="42"  r="20" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="93"  cy="24"  r="13" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="158" cy="48"  r="24" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="212" cy="22"  r="13" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="60"  cy="110" r="16" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="196" cy="108" r="18" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="126" cy="132" r="26" fill="var(--pin-rust)" />
    </svg>
  )
}

/* 03 — two circles overlapping, the work happening in the intersection. */
export function GlyphOverlap() {
  return (
    <svg className="step__glyph" viewBox="0 0 240 180" aria-hidden="true">
      <circle cx="90"  cy="90" r="58" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="150" cy="90" r="58" {...RING} stroke="var(--pin-teal-soft)" />
      <circle cx="120" cy="90" r="18" fill="var(--pin-rust)" />
    </svg>
  )
}

/* 04 — stacked bars widening downward: the finished work, put in front of
   the field. */
export function GlyphShowcase() {
  return (
    <svg className="step__glyph" viewBox="0 0 240 180" aria-hidden="true">
      <rect x="88" y="36"  width="64" height="30" rx="15" fill="var(--pin-teal)" />
      <rect x="76" y="76"  width="88" height="32" rx="16" fill="var(--pin-deep-soft)" />
      <rect x="64" y="118" width="112" height="34" rx="17" fill="var(--pin-rust)" />
      <circle cx="26"  cy="62"  r="11" fill="var(--pin-teal-soft)" />
      <circle cx="214" cy="52"  r="11" fill="var(--pin-teal-soft)" />
      <circle cx="32"  cy="132" r="11" fill="var(--pin-teal-soft)" />
      <circle cx="208" cy="124" r="11" fill="var(--pin-teal-soft)" />
    </svg>
  )
}
