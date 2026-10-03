# Le Prestige — Site vitrine

Site vitrine du salon **Le Prestige** (coiffure & beauté, Grenoble).
Stack : [Astro](https://astro.build) + TypeScript, zéro framework client, images
optimisées automatiquement (WebP/AVIF responsive), rendu 100 % statique.

## Démarrer

```bash
npm install
npm run dev       # serveur de développement (http://localhost:4321)
npm run build     # build de production dans /dist
npm run preview   # prévisualiser le build
```

## Structure

```
src/
  data/        services.ts (tarifs), site.ts (infos salon), gallery.ts (photos)
  components/  Header, Footer, ReserveButton, ServiceUniverse, Gallery
  layouts/     BaseLayout (SEO, polices, transitions, reveal au scroll)
  pages/       index, prestations, realisations, a-propos, contact, mentions-legales
  assets/      images/ (logo) + gallery/ (réalisations)
public/        favicon.png, og-image.png, robots.txt
```

Toutes les données (tarifs, horaires, coordonnées) sont centralisées dans `src/data/`.
Pour mettre à jour un prix ou une info : un seul fichier à éditer.

## Fidélité des données

Les tarifs proviennent de la fiche **Planity** du salon et sont reproduits
fidèlement (« à partir de », fourchettes et durées préservés). Aucun prix n'est
recalculé ni inventé. Les catégories partielles renvoient explicitement vers Planity.

Les **avis** (`src/data/reviews.ts`) sont extraits VERBATIM de Planity (texte exact,
non reformulé). Pour en ajouter : coller d'autres avis réels dans ce fichier.

## Média

- **Image hero** : `src/assets/images/hero.jpg` (`object-fit: cover`, sans étirement).
- **Prestations** : cartes-mosaïque dépliables (une seule ouverte à la fois).
- **Transitions de page** : fondu + révélation circulaire vers l'extérieur (View Transitions).
- Toutes les photos sont optimisées automatiquement en WebP/AVIF responsive.

## ⚠️ À fournir / vérifier par le client avant mise en ligne

- [ ] **Nom de domaine** final → mettre à jour `SITE` dans `astro.config.mjs`
      et l'URL du sitemap dans `public/robots.txt`.
- [ ] **Mentions légales** : raison sociale, forme juridique, SIRET, TVA,
      responsable de publication, hébergeur → `src/pages/mentions-legales.astro`.
- [ ] **Médiateur de la consommation** (obligatoire) → `mentions-legales.astro`.
- [ ] **Avis clients** : seul l'agrégat réel (4,8/5 · 464 avis Planity) est affiché.
      Pour ajouter 2-3 témoignages, fournir des avis réels et vérifiables
      (voir le `TODO` dans `src/pages/index.astro`).
- [ ] **Head Spa / image laser** : vérifier que la photo d'ambiance convient.

## Informations vérifiées

- Adresse : 41 rue Lesdiguières, 38000 Grenoble
- Téléphone : 04 76 46 18 66 *(confirmé par le client)*
- Horaires : Mar–Ven 9h–19h · Sam 9h–17h · Fermé Dim & Lun
- Réservation : Planity *(tous les boutons « Réserver » y renvoient)*
- Note : 4,8/5 · 464 avis (Planity)

## Déploiement

Site 100 % statique : déployable sur Netlify, Vercel, Cloudflare Pages, ou tout
hébergement de fichiers statiques. Dossier à publier : `/dist`.
