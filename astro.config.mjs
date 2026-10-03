// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://boyaultenki-debug.github.io';
const BASE = '/le-prestige-coiffure-true';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
  image: {},
  build: {
    inlineStylesheets: 'auto',
  },
});
