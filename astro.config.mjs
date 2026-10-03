// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ============================================================================
// DÉPLOIEMENT GITHUB PAGES — 2 cas :
//
//  A) Dépôt nommé "TONPSEUDO.github.io"  (site servi à la racine)
//     → mets ton URL dans SITE, laisse BASE commenté.
//
//  B) Dépôt avec un autre nom, ex "le-prestige-coiffure"
//     (site servi sous .../le-prestige-coiffure/)
//     → mets SITE = 'https://TONPSEUDO.github.io'
//     → DÉCOMMENTE la ligne BASE et mets le nom EXACT du dépôt.
//
//  (Plus tard, avec un vrai nom de domaine : SITE = ce domaine, BASE commenté.)
// ============================================================================
const SITE = 'https://TONPSEUDO.github.io';
// const BASE = '/le-prestige-coiffure';

export default defineConfig({
  site: SITE,
  // base: BASE,
  integrations: [sitemap()],
  image: {
    // Génération WebP/AVIF responsive via sharp (par défaut)
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
