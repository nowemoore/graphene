import { useEffect, useState } from 'react'
import { CaretDownIcon, XIcon } from '@phosphor-icons/react'

import FieldMap from './FieldMap.jsx'

const PROJECTS = [
  {
    title: <>Operationalizing Transformative AI (a watchlist for institutions)</>,
    body: <>Most definitions of &ldquo;Transformative AI&rdquo; are either economic abstractions or vibes. This project turns the concept into observable thresholds: which concrete signs (labor-market discontinuities, delegation rates, institutional decision latency) should governments, funders, and firms treat as evidence the transition has begun, and which apparent signs are noise.</>,
  },
  {
    title: 'Metrics of Gradual Disempowerment',
    body: <>There is no agreed way to determine whether human influence over key systems declined this year, until it&rsquo;s too late. This project proposes candidate metrics (e.g. share of consequential decisions with material human veto, human-comprehensibility of institutional processes, revenue dependence on human participation), assesses each for measurability and Goodhart-resistance, and pilots one on real data.</>,
  },
  {
    title: 'Mapping the effects of extensive AI companionship, sycophancy and belief reinforcement',
    body: <>Millions of people are using AI for companionship, social interaction, and emotional support. Assuming an increasing trend, we do not know what systemic societal effects to expect as a result, nor what new vulnerabilities and what levers may effectively protect societal cohesion. This project may seek to identify potential effects at different scales: individual, local, national, global.</>,
  },
  {
    title: 'Analyzing the interaction between deskilling and an aging population',
    body: <>Cognitive offloading and deskilling have been identified as potential dangers of reliance on AI. How will this interact with an aging population as it leaves the workforce with fewer individuals to replace it? Will AI serve as a replacement workforce to support prosperity at reduced human involvement, or will the effects on the skills of younger populations render them detrimentally unable to support their elders?</>,
  },
  {
    title: 'Value development and avoiding value lock-in in the AI age',
    body: <>Value lock-in is a scenario where AI systems permanently internalize and enforce a specific set of moral, political, or social values, preventing moral evolution. This may support democratic decline, homogenization, or power concentration. While there are ideas on how this may develop, it is unclear how society may develop resilience against such a state.</>,
  },
  {
    title: 'How much human involvement keeps a system human-serving?',
    body: <>This project aims to develop models of human-serving, human-involved systems, such as labour and tax, to understand what level of human involvement is required to maintain human influence over the system. How can this involvement vary? Are there critical roles that must be occupied by humans, or else human influence will be unrecoverable?</>,
  },
]

const FAQS = [
  {
    q: 'What is this map? What do the nodes actually represent?',
    a: 'This is a map of research directions at the interface of AI safety and humanity’s long-term resilience. The further out from the centre, the more specific the focus area, with the outermost nodes representing individual problems.',
  },
  {
    q: 'Who is this map for?',
    a: 'If you’re an aspiring conceptual researcher, a transitioning technical researcher, or just curious about open problems in societal resilience, this map may be for you. It is also the fastest way to find where a Graphene project could sit.',
  },
  {
    q: 'Do I have to pick a topic from the map?',
    a: 'No. The map and the areas above are illustrative, not exhaustive. Applicants design their own project that should first and foremost be interesting to them, and then check that it fits any of the mentor interests.',
  },
  {
    q: 'Why should I trust the author hasn’t missed anything important?',
    a: 'You shouldn’t! This is a living project. If you know of a research direction or topic in societal resilience that should be included but isn’t, email nowe.moore@gmail.com.',
  },
  {
    q: 'What makes the author qualified to curate these resources?',
    a: 'Not much, which is why the author called some of the most well-read and sharp people she knows to the rescue. Shout out to Maria Kostylew, Charles Dillon, Ashe Vazquez, Yasha Rise, and others for their thoughtful contributions.',
  },
]

export default function MapSections() {
  const [faqOpen, setFaqOpen] = useState(false)

  /* Escape closes the drawer, and the page behind it stops scrolling —
     both matching the node modal's behaviour. */
  useEffect(() => {
    if (!faqOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setFaqOpen(false) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [faqOpen])

  return (
    <>
      {/* ── intro ────────────────────────────────────────────────────────── */}
      <section className="section section--tight section--deep" id="map">
        <div className="section__inner">
          <p className="kicker smallcaps">Fellowship topics map</p>
          <h2 className="section__title section__title--lead">
            Open questions in societal resilience
          </h2>
          <p className="section__standfirst section__standfirst--wide">
            This map lays out the research directions in post-TAI societal resilience that fall
            within the fellowship&rsquo;s scope. Some nodes are clickable and include useful
            resources; stay tuned for more!
          </p>
        </div>
      </section>

      {/* ── the map ──────────────────────────────────────────────────────── */}
      <section className="map-section map-section--deep" aria-label="Interactive field map">
        <p className="map-hint smallcaps">
          drag to pan &middot; pinch to zoom &middot; click a highlighted node to learn more
        </p>

        <div className="map-stage">
          <FieldMap />

          <button
            type="button"
            className="faq-tab smallcaps"
            onClick={() => setFaqOpen(true)}
            aria-expanded={faqOpen}
            aria-controls="faq-drawer"
          >
            FAQs
          </button>

          <div
            className={`faq-scrim${faqOpen ? ' faq-scrim--on' : ''}`}
            onClick={() => setFaqOpen(false)}
            role="presentation"
          />

          <aside
            id="faq-drawer"
            className={`faq-drawer${faqOpen ? ' faq-drawer--open' : ''}`}
            aria-label="Frequently asked questions"
            {...(faqOpen ? {} : { inert: '' })}
          >
            <header className="faq-drawer__head">
              <p className="kicker smallcaps">Frequently asked</p>
              <button
                type="button"
                className="faq-drawer__close"
                onClick={() => setFaqOpen(false)}
                aria-label="Close FAQs"
              >
                <XIcon />
              </button>
            </header>

            <div className="faq-list">
              {FAQS.map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary className="faq-question">
                    {q}
                    <CaretDownIcon className="faq-chevron" aria-hidden="true" />
                  </summary>
                  <p className="faq-answer">{a}</p>
                </details>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ── research areas ───────────────────────────────────────────────── */}
      <section className="section section--deep" id="areas">
        <div className="section__inner">
          <p className="kicker smallcaps">Possible projects</p>
          <h2 className="section__title">Possible projects</h2>
          <p className="section__standfirst">
            We welcome any projects within the fellowship's scope and are adding a few examples here for inspiration:
          </p>

          <div className="card-grid card-grid--trio">
            {PROJECTS.map((project, i) => (
              <article className="card card--quiet card--portrait" key={i}>
                <h3 className="card__title">{project.title}</h3>
                <p className="card__body">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
