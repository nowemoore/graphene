import { useEffect } from 'react'
import { BankIcon, BookOpenIcon, MagnifyingGlassIcon, UsersIcon, XCircleIcon }
  from '@phosphor-icons/react'

function ResourceList({ items, icon: Icon }) {
  return (
    <ul className="resource-items">
      {items.map((item, i) => (
        <li key={i}>
          <Icon className="resource-bullet" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function NodeModal({ nodeContent, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = nodeContent ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [nodeContent])

  if (!nodeContent) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <article
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-topbar">
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close details">
            <XCircleIcon />
          </button>
        </header>

        <div className="modal-body">
          <section className="modal-section">
            <p className="section-kicker smallcaps">Problem overview</p>
            <h2 id="modal-title">{nodeContent.title}</h2>
            <p className="overview-copy">{nodeContent.overview}</p>
          </section>

          <section className="modal-section">
            <p className="section-kicker smallcaps">Resource hub</p>

            {nodeContent.resources.mustReads?.length > 0 && (
              <div className="resource-subsection">
                <h3>Must-Reads</h3>
                <ResourceList items={nodeContent.resources.mustReads} icon={BookOpenIcon} />
              </div>
            )}

            {nodeContent.resources.people?.length > 0 && (
              <div className="resource-subsection">
                <h3>People</h3>
                <ResourceList items={nodeContent.resources.people} icon={UsersIcon} />
              </div>
            )}

            {nodeContent.resources.orgs?.length > 0 && (
              <div className="resource-subsection">
                <h3>Orgs</h3>
                <ResourceList items={nodeContent.resources.orgs} icon={BankIcon} />
              </div>
            )}

            {nodeContent.resources.openQuestions?.length > 0 && (
              <div className="resource-subsection">
                <h3>Open Questions</h3>
                <ResourceList items={nodeContent.resources.openQuestions} icon={MagnifyingGlassIcon} />
              </div>
            )}
          </section>
        </div>
      </article>
    </div>
  )
}
