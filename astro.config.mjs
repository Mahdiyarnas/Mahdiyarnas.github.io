import { defineConfig } from 'astro/config';

// GitHub Pages deployment notes:
// - If this repo will live at username.github.io -> leave `base` as '/'
// - If this repo will live at username.github.io/REPO_NAME -> set base to '/REPO_NAME/'
export default defineConfig({
  site: 'https://mahdiyarnas.github.io', // replace with your actual GitHub Pages URL
  base: '/',
  output: 'static',
});
