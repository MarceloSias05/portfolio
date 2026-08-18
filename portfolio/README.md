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

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```
