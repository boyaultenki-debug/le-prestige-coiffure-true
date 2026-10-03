// =============================================================================
// Prestations & tarifs — Le Prestige, Grenoble
// Source : Planity (le-prestige-38000-grenoble).
// RÈGLE : fidélité stricte aux prix. « à partir de », fourchettes et durées
// sont conservés tels quels. Aucun prix n'est recalculé, arrondi ou inventé.
// Les listes partielles renvoient explicitement vers Planity (flag `partial`).
// =============================================================================

export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  note?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  /** true si la catégorie compte d'autres prestations non listées (voir Planity) */
  partial?: boolean;
}

export interface Universe {
  id: string;
  title: string;
  tagline: string;
  /** nom du fichier image d'illustration dans src/assets/gallery (sans chemin) */
  categories: ServiceCategory[];
}

export const universes: Universe[] = [
  {
    id: 'coiffure',
    title: 'Coiffure',
    tagline: 'Coupes femmes, hommes et enfants, pensées pour votre nature de cheveu.',
    categories: [
      {
        title: 'Coupes femmes',
        partial: true,
        items: [
          { name: 'Shampoing, coupe & brushing — cheveux courts', duration: '1 h', price: '45 €' },
          { name: 'Shampoing, coupe & brushing — mi-longs', duration: '1 h 15', price: '60 €' },
          { name: 'Shampoing, coupe & brushing — longs', duration: '1 h 30', price: '70 €' },
          { name: 'Shampoing, coupe & brushing — très longs', duration: '1 h 50', price: '80 €' },
          { name: 'Shampoing & brushing — cheveux courts', duration: '50 min', price: '35 €' },
        ],
      },
      {
        title: 'Hommes',
        partial: true,
        items: [
          { name: 'Coupe homme', duration: '30 min', price: '26 €' },
        ],
      },
      {
        title: 'Enfants & ados',
        items: [
          { name: 'Fille (5–11 ans)', duration: '30 min', price: '27 €' },
          { name: 'Ado fille (12–15 ans)', duration: '25 min', price: '35 €' },
          { name: 'Garçon (7–11 ans)', duration: '30 min', price: '20 €' },
          { name: 'Ado garçon (12–15 ans)', duration: '30 min', price: '24 €' },
        ],
      },
    ],
  },
  {
    id: 'couleur',
    title: 'Couleur & techniques',
    tagline: 'Blond polaire, balayages et technique Mounir — notre signature.',
    categories: [
      {
        title: 'Coloration',
        partial: true,
        items: [
          { name: 'Racines — shampoing, soin & brushing — courts', duration: '1 h 45', price: '60 €' },
          { name: 'Racines — shampoing, soin & brushing — mi-longs', duration: '2 h', price: '75 €' },
          { name: 'Racines — shampoing, soin & brushing — longs', duration: '2 h 15', price: '85 €' },
          { name: 'Coloration + coupe — courts', duration: '1 h 45', price: '75 €' },
          { name: 'Coloration + coupe — mi-longs', duration: '2 h 15', price: '85 €' },
        ],
      },
      {
        title: 'Balayage, ombré & mèches',
        partial: true,
        items: [
          { name: 'Avec coupe — courts', duration: '4 h', price: 'à partir de 136 €' },
          { name: 'Avec coupe — mi-longs', duration: '4 h 40', price: 'à partir de 195 €' },
          { name: 'Avec coupe — longs', duration: '5 h 20', price: 'à partir de 270 €' },
          { name: 'Sans coupe — courts', duration: '3 h 30', price: 'à partir de 116 €' },
          { name: 'Sans coupe — mi-longs', duration: '4 h 35', price: 'à partir de 175 €' },
        ],
      },
      {
        title: 'Technique Mounir — ombré libanais',
        items: [
          { name: 'Cheveux courts', duration: '4 h 20', price: 'à partir de 174 €' },
          { name: 'Mi-longs', duration: '4 h 50', price: 'à partir de 240 €' },
          { name: 'Longs', duration: '5 h 40', price: 'à partir de 295 €' },
          { name: 'Très longs', duration: '5 h 40', price: 'à partir de 349 €' },
        ],
      },
      {
        title: 'Gloss & patine',
        items: [
          { name: 'Courts + brushing', duration: '1 h', price: 'à partir de 49 €' },
          { name: 'Mi-longs + shampoing & brushing', duration: '1 h 50', price: 'à partir de 75 €' },
          { name: 'Longs + shampoing & brushing', duration: '2 h 10', price: 'à partir de 85 €' },
        ],
      },
      {
        title: 'Contouring & décoloration',
        items: [
          { name: 'Contouring + patine + brushing', duration: '3 h 15', price: 'à partir de 74 €' },
          { name: 'Décoloration racines', duration: '3 h', price: 'à partir de 70 €' },
          { name: 'Gommage de couleur', duration: '2 h', price: '40 – 100 €' },
        ],
      },
    ],
  },
  {
    id: 'soins',
    title: 'Soins & lissages',
    tagline: 'Réparation, botox capillaire, lissages et extensions.',
    categories: [
      {
        title: 'Soins capillaires',
        partial: true,
        items: [
          { name: 'Soin kératine', duration: '10 min', price: '13 €' },
          { name: 'Soin essentiel', duration: '30 min', price: '8 €' },
          { name: 'Olaplex', duration: '30 min', price: '15 €' },
          { name: 'Soin botox — courts', duration: '2 h 15', price: '50 – 65 €' },
          { name: 'Soin botox — longs', duration: '2 h 30', price: '65 – 95 €' },
        ],
      },
      {
        title: 'Lissages',
        items: [
          { name: 'Bande de contour', duration: '2 h 05', price: '70 – 100 €' },
          { name: 'Lissage nano indien', duration: '4 h', price: '300 €' },
          { name: 'Lissage nano spiruline', duration: '4 h', price: '300 €' },
          { name: 'Lissage spiruline', duration: '4 h', price: '200 €' },
          { name: 'Offre renouvellement (3 mois)', duration: '4 h', price: '150 – 250 €' },
        ],
      },
      {
        title: 'Extensions',
        items: [
          { name: 'Pose', duration: '1 h 30', price: 'sur devis' },
          { name: 'Dépose', duration: '1 h', price: 'sur devis', note: '1 € / mèche' },
        ],
      },
    ],
  },
  {
    id: 'headspa',
    title: 'Head Spa',
    tagline: 'Un rituel japonais du cuir chevelu, pour relâcher complètement. Réservé aux femmes.',
    categories: [
      {
        title: 'Rituels Head Spa',
        items: [
          { name: 'Formule Relaxant', duration: '45 min', price: '70 €' },
          { name: 'Formule Équilibre', duration: '1 h', price: '110 €' },
          { name: 'Formule Le Prestige', duration: '1 h 30', price: '135 €' },
        ],
      },
      {
        title: 'Duos bien-être',
        items: [
          { name: 'Head Spa + soin du visage', duration: '1 h 30', price: '85 €' },
          { name: 'Head Spa + massage', duration: '1 h 30', price: '85 €' },
        ],
      },
    ],
  },
  {
    id: 'esthetique',
    title: 'Esthétique',
    tagline: 'Épilation à la cire, épilation laser et soins du visage.',
    categories: [
      {
        title: 'Épilation à la cire',
        partial: true,
        items: [
          { name: 'Sourcils au fil', duration: '15 min', price: '12 €' },
          { name: 'Sourcils à la cire', duration: '10 min', price: '10 €' },
          { name: 'Lèvre', duration: '5 min', price: '8 €' },
          { name: 'Menton', duration: '10 min', price: '8 €' },
          { name: 'Joues', duration: '10 min', price: '10 €' },
        ],
      },
      {
        title: 'Forfaits épilation',
        partial: true,
        items: [
          { name: 'Sourcils + lèvre + menton', duration: '30 min', price: '22 €' },
          { name: 'Aisselles + demi-jambes + maillot intégral', duration: '1 h', price: '49 €' },
          { name: 'Aisselles + jambes complètes + maillot intégral', duration: '1 h 10', price: '59 €' },
          { name: 'Aisselles + cuisses + maillot intégral', duration: '1 h', price: '49 €' },
          { name: 'Aisselles + demi-jambes + maillot brésilien', duration: '45 min', price: '45 €' },
        ],
      },
      {
        title: 'Épilation laser — à la séance',
        partial: true,
        items: [
          { name: 'Diagnostic de peau', duration: '15 min', price: 'offert' },
          { name: 'Visage (menton / lèvre / inter-sourcils)', duration: '10 min', price: '40 €' },
          { name: 'Aisselles', duration: '15 min', price: '87 €' },
          { name: 'Avant-bras', duration: '20 min', price: '100 €' },
          { name: 'Bras complets', duration: '30 min', price: '130 €' },
        ],
      },
      {
        title: 'Épilation laser — forfait 8 séances',
        partial: true,
        items: [
          { name: 'Visage', price: '280 €' },
          { name: 'Aisselles', price: '350 €' },
          { name: 'Avant-bras', price: '700 €' },
          { name: 'Bras complets', price: '910 €' },
          { name: 'Demi-jambes', price: '1 015 €' },
        ],
      },
      {
        title: 'Soins du visage',
        items: [
          { name: 'Soin hydratant', duration: '1 h', price: '55 €' },
          { name: 'Soin purifiant', duration: '1 h', price: '55 €' },
          { name: 'Soin matifiant', duration: '1 h', price: '55 €' },
          { name: 'Soin anti-âge', duration: '1 h', price: '60 €' },
          { name: 'Forfait détente (visage + dos)', duration: '1 h', price: '65 €' },
        ],
      },
    ],
  },
  {
    id: 'corps',
    title: 'Corps & bien-être',
    tagline: 'Massages et cryolipolyse pour prolonger la parenthèse.',
    categories: [
      {
        title: 'Massages',
        items: [
          { name: 'Massage relaxant corps complet', duration: '45 min', price: '50 €' },
          { name: 'Massage relaxant corps complet', duration: '1 h', price: '55 €' },
          { name: 'Massage crânien', duration: '15 min', price: '12 €' },
          { name: 'Massage des mains', duration: '10 min', price: '10 €' },
          { name: 'Massage des pieds', duration: '10 min', price: '10 €' },
          { name: 'Patchs contour des yeux', duration: '1 min', price: '8 €' },
        ],
      },
      {
        title: 'Cryolipolyse',
        partial: true,
        items: [
          { name: 'Bilan / consultation', duration: '20 min', price: 'offert' },
          { name: 'Forfait découverte', duration: '1 h 10', price: '49 €' },
          { name: 'Abdomen', duration: '1 h 10', price: '99 €' },
          { name: 'Triceps / bras', duration: '1 h 10', price: '120 €' },
          { name: "Poignées d'amour", duration: '1 h 10', price: '120 €' },
        ],
      },
    ],
  },
  {
    id: 'ongles',
    title: 'Ongles',
    tagline: 'Semi-permanent, gel et capsules, avec finitions soignées.',
    categories: [
      {
        title: 'Mains',
        partial: true,
        items: [
          { name: 'Semi-permanent mains', duration: '45 min', price: '35 €' },
          { name: 'Pose gel avec capsules', duration: '2 h', price: '55 €' },
          { name: 'Pose capsules américaines', duration: '1 h 30', price: '45 €' },
          { name: "Renforcement d'ongles", duration: '1 h 30', price: '40 €' },
          { name: 'Nail art baby boomer', duration: '15 min', price: '5 €' },
        ],
      },
    ],
  },
];
