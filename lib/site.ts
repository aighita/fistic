export const siteConfig = {
  name: 'FISTIC',
  legalName: 'FISTIC Craiova',
  title: 'FISTIC | Clatite si mini-gogosi in Craiova',
  description:
    'FISTIC Craiova aduce clatite fine, mini-gogosi si deserturi pentru targuri, evenimente private, activari corporate si colaborari HoReCa.',
  shortDescription: 'Clatite fine si mini-gogosi pentru targuri si evenimente in Craiova.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://fistic-craiova.ro'),
  locale: 'ro_RO',
  language: 'ro-RO',
  country: 'RO',
  phone: '+40784370666',
  phoneDisplay: '+40 784 370 666',
  email: 'fisticsupreme@gmail.com',
  addressLocality: 'Craiova',
  addressRegion: 'Dolj',
  addressCountry: 'RO',
  areaServed: ['Craiova', 'Dolj', 'Romania'],
  keywords: [
    'fistic craiova',
    'clatite craiova',
    'mini gogosi craiova',
    'deserturi craiova',
    'rulota deserturi craiova',
    'food truck deserturi craiova',
    'catering deserturi craiova',
    'deserturi evenimente craiova',
    'targul de paste craiova',
    'festival deserturi craiova',
    'clatite evenimente',
    'gogosi evenimente',
  ],
  socialLinks: [
    'https://www.facebook.com/andreigrigore.mitrachepredut',
    'https://www.tiktok.com/@adi.mitrache',
    'https://www.instagram.com/',
  ],
} as const;

export const siteUrl = new URL(siteConfig.url);

export const indexedRoutes = ['/'] as const;
