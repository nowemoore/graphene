/* The graphene cell: a hexagonal ring of carbon nodes, one of them rust.
   Colours come from CSS custom properties so a dark ground (the footer)
   can lift them without a second copy of the geometry. */
export default function Mark({ className = '' }) {
  return (
    <svg
      className={`mark ${className}`.trim()}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        className="mark__ring"
        points="50,10 84.6,30 84.6,70 50,90 15.4,70 15.4,30"
        fill="none"
        strokeWidth="6"
      />
      <circle className="mark__node" cx="50" cy="10" r="9" />
      <circle className="mark__node" cx="84.6" cy="30" r="9" />
      <circle className="mark__node" cx="84.6" cy="70" r="9" />
      <circle className="mark__node mark__node--accent" cx="50" cy="90" r="9" />
      <circle className="mark__node" cx="15.4" cy="70" r="9" />
      <circle className="mark__node" cx="15.4" cy="30" r="9" />
    </svg>
  )
}
