// =============================================================================
// Galerie — réalisations réelles du salon (photos fournies par le client,
// droits confirmés). L'alt text décrit fidèlement chaque réalisation.
// Les images sont résolues via import.meta.glob pour l'optimisation Astro.
// =============================================================================
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

export type GalleryTag = 'balayage' | 'blond' | 'cuivre' | 'brun' | 'headspa';

export interface GalleryItem {
  file: string;
  alt: string;
  tag: GalleryTag;
  /** mis en avant sur la page d'accueil */
  feature?: boolean;
}

const items: GalleryItem[] = [
  { file: 'balayage-miel-boucle.png', alt: 'Balayage miel bouclé sur cheveux longs', tag: 'balayage', feature: true },
  { file: 'carre-cuivre.png', alt: 'Carré lissé cuivré intense', tag: 'cuivre', feature: true },
  { file: 'blond-sable-lisse.png', alt: 'Blond sable lissé aux reflets multiples', tag: 'blond', feature: true },
  { file: 'balayage-froid-ondule.png', alt: 'Balayage froid ondulé sur cheveux longs', tag: 'balayage', feature: true },
  { file: 'blond-ondule-long.png', alt: 'Blond ondulé lumineux sur cheveux longs', tag: 'blond', feature: true },
  { file: 'balayage-bronde-long.png', alt: 'Balayage bronde ondulé sur cheveux longs', tag: 'balayage' },
  { file: 'blond-milong-lisse.png', alt: 'Blond lissé mi-long lumineux', tag: 'blond' },
  { file: 'balayage-blond-lisse.png', alt: 'Balayage blond lissé', tag: 'blond' },
  { file: 'balayage-caramel-ondule.png', alt: 'Balayage caramel ondulé', tag: 'balayage' },
  { file: 'carre-cuivre-boucle.png', alt: 'Carré bouclé aux reflets cuivrés', tag: 'cuivre' },
  { file: 'balayage-caramel-milong.png', alt: 'Balayage caramel ondulé mi-long', tag: 'balayage' },
  { file: 'blond-ondule-milong.png', alt: 'Blond ondulé mi-long', tag: 'blond' },
  { file: 'blond-lisse-long.png', alt: 'Blond lissé grande longueur', tag: 'blond' },
  { file: 'balayage-blond-closeup.png', alt: 'Détail de balayage blond ondulé', tag: 'balayage' },
];

function resolve(file: string): ImageMetadata {
  const match = files[`../assets/gallery/${file}`];
  if (!match) throw new Error(`Image galerie introuvable : ${file}`);
  return match.default;
}

export const gallery = items.map((item) => ({ ...item, src: resolve(item.file) }));
export const featured = gallery.filter((g) => g.feature);

export const headSpaJade = resolve('headspa-jade.png');
export const zenImage = resolve('zen-fountain.jpg');

export const tagLabels: Record<GalleryTag, string> = {
  balayage: 'Balayages',
  blond: 'Blonds',
  cuivre: 'Cuivrés',
  brun: 'Bruns',
  headspa: 'Head Spa',
};
