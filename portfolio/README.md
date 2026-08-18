# marcelo.sias — portfolio

Personal portfolio of Arnoldo Marcelo Sias Saucedo — software engineer working
across LLM agent pipelines, native iOS and full-stack web.

Built with React 19 + TypeScript + Vite. No UI libraries — hand-rolled CSS with
a small design-token system.

## Structure

- `src/data/profile.ts` — all resume content as typed data. To update the site,
  edit this file; the components render whatever is here.
- `src/components/` — presentational components (Nav, Hero, Section,
  ExperienceList, Projects, Skills, Education, Footer).
- `src/index.css` — design tokens (palette, type, layout) and base styles.
- `src/App.css` — component styles.
- `public/projects/` — project captures. Reference them from `profile.ts` via the
  `image` field; `fit: 'screen'` crops wide site captures, `fit: 'device'` keeps a
  full phone mockup visible on its own ground, `fit: 'showcase'` runs a wide panel
  full-bleed across the top of the card.
- A project's `video` field replaces the still with a player. The poster image shows
  until the card scrolls into view, then the YouTube embed loads and starts — muted,
  which is what browsers require to start without a click. Readers who set
  `prefers-reduced-motion` get the poster and press play themselves.
- `public/logos/` — organization marks, referenced via the `logo` field.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```
