export const BUSINESS_ID = 'https://www.hagaplattsattning.se/#business';

export const BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'Haga Plattsättning AB',
  legalName: 'Haga Plattsättning AB',
  url: 'https://www.hagaplattsattning.se',
  logo: 'https://www.hagaplattsattning.se/Hagaplattsattninglogga.svg',
  image: 'https://www.hagaplattsattning.se/Hagaplattsattninglogga.svg',
  telephone: '+46739133348',
  email: 'kontakt@hagaplattsattning.se',
  vatID: 'SE559297850501',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Skyttevägen 6',
    postalCode: '192 58',
    addressLocality: 'Sollentuna',
    addressRegion: 'Stockholm',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 59.4281,
    longitude: 17.9506,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    'Stockholm',
    'Sollentuna',
    'Solna',
    'Sundbyberg',
    'Lidingö',
    'Danderyd',
    'Täby',
    'Nacka',
    'Bromma',
    'Järfälla',
    'Upplands Väsby',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Byggkeramikrådets våtrumsintyg' },
  ],
  award: [
    'Rekommenderat Företag 2024 – Reco',
    'Rekommenderat Företag 2025 – Reco',
    'Rekommenderat 2 år i rad – Reco',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '34',
    reviewCount: '34',
  },
  sameAs: [
    'https://www.reco.se/haga-plattsattning-ab-sollentuna',
    'https://share.google/Y2LFBgcHz0nG6z3Qm',
  ],
} as const;
