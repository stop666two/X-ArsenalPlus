import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://x-arsenalplus.pages.dev',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
