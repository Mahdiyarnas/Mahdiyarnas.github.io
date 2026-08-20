# Portfolio

Built with [Astro](https://astro.build). Minimal, typography-driven, single page for now.

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Structure

- `src/pages/index.astro` — the homepage: hero, index of works, about, footer
- `src/layouts/Layout.astro` — shared `<head>` / page shell
- `src/styles/global.css` — design tokens (colors, type, spacing) and all styling

## Editing content

Project entries live in the `works` array at the top of `src/pages/index.astro`.
Each one has a title, year, role, stack, description, and link — edit or add
entries there. Once there are enough projects to warrant full case-study
pages, migrate `works` into an Astro **content collection**
(`src/content/works/*.md`) so each project gets its own page and URL.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In `astro.config.mjs`, set `site` to your Pages URL, and `base`:
   - Repo named `username.github.io` → `base: '/'`
   - Any other repo name → `base: '/your-repo-name/'`
3. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
4. Push to `main` — the included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically.

## Fonts

Space Grotesk (display), Newsreader (body serif), and IBM Plex Mono (labels/
metadata) are loaded from Google Fonts in `global.css`. Swap the `@import`
line and the `--font-*` variables to change the type system.
