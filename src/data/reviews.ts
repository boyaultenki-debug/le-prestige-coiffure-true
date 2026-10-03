// =============================================================================
// Avis clients — extraits VERBATIM de la fiche Planity du salon.
// Texte exact, non reformulé. Les auteurs sont anonymisés sur Planity ;
// on affiche donc « Client vérifié · Planity » + la date.
// Pour en ajouter : coller ici d'autres avis réels (ne rien inventer).
// =============================================================================

export interface Review {
  text: string;
  date: string; // format affiché
  rating: number;
}

export const reviews: Review[] = [
  {
    text: 'Rien à dire, super salon, je suis ressorti avec le blond de mes rêve. Lydia superbe ✅',
    date: 'Septembre 2026',
    rating: 5,
  },
  {
    text: 'Nouvelles esthéticienne, nouvelles expériences. Je suis ravie, S. à su me mettre à l’aise, et parfaitement réalisé mon épilation sourcils au fil. Merci beaucoup 🙏',
    date: 'Septembre 2026',
    rating: 5,
  },
  {
    text: 'Bonne prestation, esthéticienne douce et avenante.',
    date: 'Septembre 2026',
    rating: 5,
  },
  {
    text: 'Un grand merci à Melina !',
    date: 'Septembre 2026',
    rating: 5,
  },
  {
    text: 'Pour une première, très sympathique et professionnel.',
    date: 'Septembre 2026',
    rating: 5,
  },
  {
    text: 'Je suis venue dans ce salon car mon esthéticienne Nayma y travaille désormais ! Elle fait toujours un très bon travail, merci à elle pour sa gentillesse et son professionnalisme.',
    date: 'Août 2026',
    rating: 5,
  },
  {
    text: 'Super accueil et bonne prise en charge de ma fille. Belle rencontre avec Bouchra qui propose des prestations de bien-être dans le salon et qui a participé à la prestation de ma fille ☺️ belle équipe.',
    date: 'Août 2026',
    rating: 5,
  },
];
