# Graphene

Site for **Graphene** — a 10-week experimental fellowship for strategy-curious talent working on
open questions in building resilient post-TAI societies.

Two views, switched via the hash router in [src/App.jsx](src/App.jsx):

| Route         | View                                          |
| ------------- | --------------------------------------------- |
| `#/programme` | hero · mission/why · fellowship structure      |
| `#/topics`    | intro · interactive field map · research areas · FAQ |

## Running it

```bash
npm install      # first time only
npm run dev      # → http://localhost:5173/resilient-societies-map/
```

Note the `/resilient-societies-map/` path — it comes from `base` in
[vite.config.js](vite.config.js) and applies in dev as well as in the build.

```bash
npm run build    # production bundle into dist/
npm run preview  # serve dist/ locally
npm run lint     # eslint
npm run deploy   # build + publish dist/ to the gh-pages branch
```

## Where things live

```
src/
  index.css              fonts, type scale, spacing scale, base elements
  cols/colors.css        every colour token — the "pin palette" lives here
  App.jsx                hash router + nav + footer
  App.css                nav / footer / shell
  styles/programme.css   hero, sections, cards, steps, FAQ
  styles/map.css         react-flow nodes + detail modal
  components/
    Nav.jsx
    FieldMap.jsx         graph data + react-flow wiring
    NodeModal.jsx        per-node resource hub
  views/
    Programme.jsx        copy for the programme view
    Topics.jsx           copy for the topics view
  content/nodes/         per-node overview + resources (one file per node)
```

### Design tokens

Colours: `#1E2224` coal (wordmark, display type, buttons, footer band, map anchor node),
`#005C7E` deep (section headings, links), `#71B5BE` teal (rules, borders, decorative),
`#E6F4F1` mist (section washes), `#852500` rust (single warm accent, used sparingly).
Teal is too light for text on white — use `--color-kicker` where teal-coloured type is wanted.

Type: Montserrat Alternates (wordmark, nav, hero, kickers), Lora (headings, pull quotes),
Mulish (body). Small caps come from the `.smallcaps` utility in `index.css`.

### Hero photo

The hero backdrop is NASA's Artemis II view of Earth, hotlinked from the Unsplash CDN
(`HERO_PHOTO` in [src/views/Programme.jsx](src/views/Programme.jsx)). `auto=format` lets the CDN
negotiate avif/webp and the `srcSet` widths keep phones off the 2560px file. Credit renders
bottom-right of the hero per Unsplash's attribution guidance.

Note this is the page's only third-party runtime dependency besides Google Fonts — if you'd
rather not depend on Unsplash being up, download the file into `src/assets/` and import it.
