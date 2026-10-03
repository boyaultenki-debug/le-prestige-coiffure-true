// =============================================================================
// Informations du salon — toutes vérifiées (Planity) ou confirmées par le client.
// Ne rien inventer ici. Les champs incertains sont signalés TODO.
// =============================================================================

export const site = {
  name: 'Le Prestige',
  fullName: 'Le Prestige — Salon de Coiffure',
  tagline: 'Salon de coiffure & beauté',
  city: 'Grenoble',
  address: {
    street: '41 rue Lesdiguières',
    postalCode: '38000',
    city: 'Grenoble',
    country: 'FR',
  },
  // Confirmé par le client
  phone: '04 76 46 18 66',
  phoneHref: 'tel:+33476461866',
  // Note confirmée par le client (source Planity)
  rating: { value: '4,8', count: 464, source: 'Planity' },
  priceRange: '€€€€',
  hours: [
    { day: 'Lundi', value: 'Fermé', closed: true },
    { day: 'Mardi', value: '09:00 – 19:00' },
    { day: 'Mercredi', value: '09:00 – 19:00' },
    { day: 'Jeudi', value: '09:00 – 19:00' },
    { day: 'Vendredi', value: '09:00 – 19:00' },
    { day: 'Samedi', value: '09:00 – 17:00' },
    { day: 'Dimanche', value: 'Fermé', closed: true },
  ],
  // Équipe vérifiée sur Planity
  team: ['Sophia', 'Lydia', 'Melina', 'Lola', 'Bouchra', 'Silvana', 'Annaelle', 'Nayma'],
  booking: {
    platform: 'Planity',
    url: 'https://www.planity.com/le-prestige-38000-grenoble',
  },
  social: {
    instagram: 'https://www.instagram.com/leprestige_coiffure/',
    facebook: 'https://www.facebook.com/leprestigecoiffure/',
  },
  maps: 'https://www.google.com/maps/place/Le+Prestige+%E2%80%93+Salon+de+Coiffure/@45.185845,5.724027,17z',
  geo: { lat: 45.185845, lng: 5.724027 },
} as const;
