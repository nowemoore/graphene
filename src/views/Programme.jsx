import { CaretRightIcon } from '@phosphor-icons/react'
import { GlyphAmbiguity, GlyphBases, GlyphSystems }
  from '../components/QualityGlyphs.jsx'

import MapSections from '../components/MapSections.jsx'
import { GlyphScope, GlyphMatch, GlyphOverlap, GlyphShowcase }
  from '../components/StepGlyphs.jsx'

/* Hero backdrop — NASA's Artemis II view of Earth, served from the Unsplash CDN.
   `auto=format` lets the CDN negotiate avif/webp; widths below feed the srcSet. */
const HERO_PHOTO = 'https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const HERO_WIDTHS = [640, 960, 1280, 1600, 2000, 2560]
const HERO_CREDIT = {
  photo: 'https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  author: 'https://unsplash.com/@nasa?utm_source=graphene&utm_medium=referral',
}

const QUALITIES = [
  {
    icon: GlyphAmbiguity,
    title: 'High Tolerance for Ambiguity',
    body: (
      <>
        Strategy questions do not arrive with a clean problem statement, established methodologies, and sometimes even obvious literature to refer to. We look for people who can sit with that discomfort long enough to find the answers' real shape.
      </>
    ),
  },
  {
    icon: GlyphBases,
    title: 'Ability to Change Bases',
    /* `title` stays a plain string for the React key; `heading` is what renders */
    heading: (
      <>
        Ability to{' '}
        <a
          className="quality__link"
          href="https://nowemoore.com/blog/changing-bases"
          target="_blank"
          rel="noreferrer"
        >
        Change Bases
        </a>
      </>
    ),
    body: (
      <>
        The same problem can appear impossible in one framing and almost obvious in another. We have special appreciation for people who instinctively change try new angles when high-dimensional problems demand different perspectives.
      </>
    ),
  },
  {
    icon: GlyphSystems,
    title: 'Fluency in Complex Systems',
    body: (
      <>
        Many strategy questions are, at least to an extent, coordination problems. Strategy talent needs to be able to reason about how different actors, incentives, and feedback loops interact in a system, and how those interactions can be nudged toward better outcomes.
      </>
    ),
  },
]

const STEPS = [
  {
    n: '01',
    glyph: GlyphMatch,
    title: <>Check out mentors' interests</>,
    body: <>Mentors post open problems or interest areas they'd be excited to supervise projects on. We predict that the ability to scope a project signals comfort with ambiguity, so we hand the task to applicants as an opportunity to demonstrate their skills.</>,
  },
  {
    n: '02',
    glyph: GlyphOverlap,
    title: 'Get matched',
    body: <>Applicants design their own project at the intersection of their curiosity and a mentor's open questions. The process is competitive and matches are made on genuine shared interests. This means that only the best matches will be made, and we will prefer to make no match to a weak one.</>,
  },
  {
    n: '03',
    glyph: GlyphShowcase,
    title: <>Do the heavy lifting (and get support!)</>,
    body: <>Throughout the fellowship, fellows are responsible for defining, re-defining, steering, and delivering on their own projects. That's some hard work, and we do our best to support it: in addition to weekly contact time with your mentor, we run cohort activities (talks, networking, and more) for fellows to find inspiration and advice.</>,
  },
  {
    n: '04',
    glyph: GlyphScope,
    title: 'Face the field',
    body: <>Fellows finish with a first-author project. We arrange opportunities for fellows' work to be seen (in a showcase, or closed-door presentations and featured blog posts for exceptional projects). We also support fellows pursuing academic conferences.</>,
  },
]

export default function Programme() {
  return (
    <>
      {/* ── hero ─────────────────────────────────────────────────────────── */}
      <section className="hero hero--space">
        <div className="hero-photo">
          <img
            className="hero-photo__img"
            src={`${HERO_PHOTO}&w=1600`}
            srcSet={HERO_WIDTHS.map((w) => `${HERO_PHOTO}&w=${w} ${w}w`).join(', ')}
            sizes="100vw"
            alt=""
            decoding="async"
            fetchPriority="high"
          />
          <span className="hero-photo__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="kicker smallcaps">A fellowship in post-TAI strategy</p>
          <h1 className="hero__title">Graphene Fellows</h1>
          <div className="hero__cols">
            <div className="hero__lead">
              <p className="hero__lede">
                Humanity has plenty left to do on building societies ready to withstand the stress transformative AI could pose on economies, institutions, and human agency. Resilience demands more talent seriously asking: say TAI arrives, <em>then what?</em>
              </p>
              <p className="hero__body">
               Graphene is an experimental fellowship for strategy-curious talent to tackle open questions on building resilient post-TAI societies and to design solutions that close strategic gaps. It bets on the premise that long-horizon research needs analytical, technically rigorous systems thinkers, and that the purpopse-built on-ramp they need does not yet exist.
              </p>

              <div className="hero__actions">
                <a className="btn btn--primary" href="#map">
                  Browse topics
                  <CaretRightIcon className="btn__icon" aria-hidden="true" />
                </a>
                <a className="btn btn--ghost" href="#structure">How the fellowship works</a>
              </div>
            </div>

            <dl className="stat-strip">
              <div className="stat">
                <dt className="smallcaps">Duration</dt>
                <dd>10 weeks, remote</dd>
              </div>
              <div className="stat">
                <dt className="smallcaps">Cohort Size</dt>
                <dd>up to 10 fellows</dd>
              </div>
              <div className="stat">
                <dt className="smallcaps">Contact Time</dt>
                <dd>1-3 hours, weekly</dd>
              </div>
              <div className="stat">
                <dt className="smallcaps">Output</dt>
                <dd>first-author portfolio project</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="hero-credit">
          Photo by{' '}
          <a href={HERO_CREDIT.author} target="_blank" rel="noreferrer">NASA</a>
          {' '}on{' '}
          <a href={HERO_CREDIT.photo} target="_blank" rel="noreferrer">Unsplash</a>
        </p>
      </section>

      {/* ── mission ──────────────────────────────────────────────────────── */}
      <section className="section section--wash" id="about">
        <div className="section__inner section__inner--narrow">
          <p className="kicker smallcaps">Mission</p>

          <div className="mission">
            <article className="mission__block">
              <h2 className="mission__title">Engineering Resilient Societies</h2>
              <p className="mission__body">
                Graphene is the strongest material known to man. Its naturally occurring cousins
                take hundreds of millions of years to form, but we can also engineer it
                artificially in minutes. Societal resilience works the same way: given enough time
                and pressure, human societies will adjust to transformative AI eventually, but TAI
                could cause hard-to-repair consequences quicker than natural adjustments arrive.
                This fellowship exists to engineer faster solutions that make the transition to
                post-TAI societies safer by design.
              </p>
            </article>

            <article className="mission__block">
              <h2 className="mission__title">Beyond Control</h2>
              <p className="mission__body">
                The feasibility of safe post-TAI societies doesn&rsquo;t just depend on human
                ability to control and restrain future AI per se, but also on how this AI behaves
                within and interacts with wider systems. Strategy research seeks to understand the
                dynamics of these interactions, map out possible failure modes, and design
                solutions to get ahead of any harms they may bring.
              </p>
            </article>

            <article className="mission__block">
              <h2 className="mission__title">Fostering Skills that Count</h2>
              <p className="mission__body">
                AI safety often introduces a false dichotomy between technical and non-technical
                talent, but in reality both technical and non-technical contributors can do
                excellent strategy work. Background informs but does not predict the fit, so
                instead of over-indexing on it, this fellowship was designed to hone other skills
                that count in strategy work: tolerance for ambiguity, frame-shifting, systems
                thinking.
              </p>
            </article>

            <p className="mission__coda">
              If this sounds anything like you, Graphene may be your vibe.
            </p>
          </div>
        </div>
      </section>

      {/* ── qualities ────────────────────────────────────────────────────── */}
      <section className="section section--deep" id="qualities">
        <div className="section__inner">
          <p className="kicker smallcaps">Who is Graphene Built for</p>
          <h2 className="section__title">Some Qualities We Look for</h2>
          <p className="section__standfirst">
            Some strategy talent will know how to run informative experiments and some will be quick to understand political incentives. We care less about what discipline you come from and more about how you use it to solve problems. Instead, we expect fellows converge on:
          </p>

          <div className="quality-grid">
            {QUALITIES.map((quality) => (
              <article className="quality" key={quality.title}>
                <quality.icon />
                <h3 className="quality__title">{quality.heading ?? quality.title}</h3>
                <p className="quality__body">{quality.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── structure ────────────────────────────────────────────────────── */}
      <section className="section section--wash" id="structure">
        <div className="section__inner">
          <p className="kicker smallcaps">Fellowship structure</p>
          <h2 className="section__title">What's Graphene like</h2>
          <p className="section__standfirst">
            Graphene runs online, flexible and mostly asynchronous: 1-5 hours of contact time weekly, the rest is yours to spend on your project. Here's the general flow:
          </p>

          <ol className="steps">
            {STEPS.map((step) => (
              <li className="step" key={step.n}>
                <span className="step__num smallcaps" aria-hidden="true">{step.n}</span>
                <div className="step__content">
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__body">{step.body}</p>
                </div>
                <step.glyph />
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* ── field map, research areas, faq ──────────────────────────── */}
      <MapSections />

      {/* ── applications ────────────────────────────────────── */}
      <section className="section" id="apply">
        <div className="section__inner section__inner--narrow">
          <p className="kicker smallcaps">Applications</p>
          <h2 className="section__title">Want to be part of the first cohort?</h2>
          <p className="section__standfirst">
            We're still finalising the mentor pool before we open applications, but if you're interested in applying, please stay tuned for updates!
          </p>

          <dl className="apply-facts">
            <div className="apply-fact">
              <dt className="smallcaps">Applications open</dt>
              <dd>TBC</dd>
            </div>
            <div className="apply-fact">
              <dt className="smallcaps">Deadline</dt>
              <dd>TBC</dd>
            </div>
            <div className="apply-fact">
              <dt className="smallcaps">Cohort starts</dt>
              <dd>TBC</dd>
            </div>
          </dl>

          {/* <div className="hero__actions">
            <a className="btn btn--primary" href="mailto:nowe.moore@gmail.com?subject=Graphene%20fellowship">
              Register your interest
              <CaretRightIcon className="btn__icon" aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#map">Browse the topics first</a>
          </div> */}
        </div>
      </section>
    </>
  )
}
