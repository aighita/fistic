import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react';

import {
  FacebookBrandIcon,
  InstagramBrandIcon,
  TikTokBrandIcon,
  WhatsAppBrandIcon,
} from '@/components/BrandIcons';
import BorderGlow from '@/components/BorderGlow';
import HeroTiltedCarousel from '@/components/HeroTiltedCarousel';
import Masonry from '@/components/Masonry';
import PillNav from '@/components/PillNav';
import ShinyText from '@/components/ShinyText';
import StarBorder from '@/components/StarBorder';
import { siteConfig } from '@/lib/site';

import clatiteCapsuni from '@/assets/clatite_cu_capsuni.webp';
import clatiteFistic from '@/assets/clatite_cu_fistic.webp';
import clatiteOreo from '@/assets/clatite_cu_oreo.webp';
import gogosiBomboane from '@/assets/gogosi_cu_bomboane.webp';
import gogosiCiocolataFructe from '@/assets/gogosi-cu-ciocolata-si-fructe.webp';
import gogosiFistic from '@/assets/gogosi-cu-fistic.webp';
import anpcLogo from '@/assets/anpc.png';

const colors = {
  pistachio: '#93C572',
  pistachioSoft: '#A9C281',
  cream: '#FAF0E6',
  creamSoft: '#FDF6E3',
  chocolate: '#3D2314',
  chocolateSoft: '#6B4A33',
  raspberry: '#E04066',
  raspberryDeep: '#E30B5C',
};

const displayFont = "'Avenir Next', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const scriptFont = "'Snell Roundhand', 'Brush Script MT', 'Segoe Script', cursive";
const phoneNumber = siteConfig.phone;
const phoneDisplay = siteConfig.phoneDisplay;
const whatsappInfoMessage =
  'Salut! Vreau să aflu mai multe despre FISTIC.';
const whatsappBookingMessage =
  'Salut! Vreau să rezerv rulota FISTIC.';
const emailAddress = siteConfig.email;
const tiktokHandle = 'adi.mitrache';
const tiktokUrl = 'https://www.tiktok.com/@adi.mitrache';

const heroCarouselItems = [
  {
    src: clatiteFistic.src,
    alt: 'Clătită signature cu fistic',
    title: 'Clătită Signature cu Fistic',
    badge: 'Cremă de brand',
  },
  {
    src: clatiteOreo.src,
    alt: 'Clătită cu Oreo și ciocolată albă',
    title: 'Clătită Oreo & Ciocolată Albă',
    badge: 'Texturi contrastante',
  },
  {
    src: clatiteCapsuni.src,
    alt: 'Clătită cu căpșuni',
    title: 'Clătită cu Căpșuni',
    badge: 'Fresh & fotogenic',
  },
  {
    src: gogosiCiocolataFructe.src,
    alt: 'Mini-gogoși cu ciocolată și fructe',
    title: 'Mini-Gogoși cu Fructe',
    badge: 'Favorită de târg',
  },
  {
    src: gogosiFistic.src,
    alt: 'Mini-gogoși cu fistic',
    title: 'Mini-Gogoși cu Fistic',
    badge: 'Accent verde FISTIC',
  },
  {
    src: gogosiBomboane.src,
    alt: 'Mini-gogoși cu bombonele',
    title: 'Mini-Gogoși cu Bomboane',
    badge: 'Pentru momente festive',
  },
];

const menuItems = [
  {
    id: 'clatita-fistic',
    img: clatiteFistic,
    title: 'Clătită Signature cu Fistic',
    subtitle: 'Cremoasă, verde și memorabilă din prima privire.',
    height: 720,
    url: '#contact',
  },
  {
    id: 'oreo-alba',
    img: clatiteOreo,
    title: 'Clătită Oreo & Ciocolată Albă',
    subtitle: 'Texturi contrastante și un finish generos.',
    height: 640,
    url: '#contact',
  },
  {
    id: 'capsuni',
    img: clatiteCapsuni,
    title: 'Clătită cu Căpșuni',
    subtitle: 'Fructată, proaspătă și perfectă pentru pofta de weekend.',
    height: 560,
    url: '#contact',
  },
  {
    id: 'fructe-padure',
    img: gogosiCiocolataFructe,
    title: 'Mini-Gogoși cu Fructe',
    subtitle: 'Glazuri bogate și topping-uri care atrag instant.',
    height: 700,
    url: '#contact',
  },
  {
    id: 'gogosi-fistic',
    img: gogosiFistic,
    title: 'Mini-Gogoși cu Fistic',
    subtitle: 'Crocante la exterior, moi în interior, cu accent de brand.',
    height: 620,
    url: '#contact',
  },
  {
    id: 'gogosi-bomboane',
    img: gogosiBomboane,
    title: 'Mini-Gogoși cu Bomboane',
    subtitle: 'Jucăușe, colorate și făcute pentru momente festive.',
    height: 540,
    url: '#contact',
  },
];

const eventPackages = [
  {
    badge: '🟢 PACHET CLASSIC',
    title: '🟢 PACHET CLASSIC',
    description:
      'Recomandat pentru evenimente unde se dorește servire rapidă și volum mare.',
    includes: [
      'preparare live la 2 plite',
      'clătite clasice',
      'toppinguri de bază (cremă de ciocolată, dulceață, banane etc.)',
      'servire directă invitați',
    ],
    pricing: [
      '2 ore – 1500 lei',
      '4 ore – 2000 lei',
      '6 ore – 2600 lei',
    ],
    accent: 'rgba(147, 197, 114, 0.18)',
    border: 'rgba(147, 197, 114, 0.42)',
    ctaLabel: 'Rezervă pachetul',
    ctaMessage: 'Salut! Vreau acest pachet: PACHET CLASSIC.',
  },
  {
    badge: '🔴 PACHET FISTIC SIGNATURE (PREMIUM)',
    title: '🔴 PACHET FISTIC\nSIGNATURE (PREMIUM)',
    description:
      'Recomandat pentru nunți și evenimente unde se dorește un desert spectaculos și interactiv.',
    includes: [
      'preparare live la 2 plite',
      'meniu premium prestabilit',
      'clătite premium + variante speciale (decoruri, combinații complexe)',
      'fructe atent alese și toppinguri premium',
      'experiență live pentru invitați',
    ],
    pricing: [
      '2 ore – 1800 lei',
      '4 ore – 2500 lei',
      '6 ore – 3200 lei',
    ],
    accent: 'rgba(224, 64, 102, 0.10)',
    border: 'rgba(224, 64, 102, 0.26)',
    ctaLabel: 'Rezervă pachetul',
    ctaMessage: 'Salut! Vreau acest pachet: PACHET FISTIC SIGNATURE (PREMIUM).',
  },
];

const eventOptionalItems = [
  'Oră suplimentară: 400 lei',
  'Operator suplimentar: 500 lei',
  'Setup extins / volum mare invitați: se discută în funcție de eveniment',
];

const eventNotes = [
  'Serviciul este oferit în sistem live, fără limită fixă de porții',
  'Numărul de clătite depinde de complexitatea alegerilor invitaților',
  'Se garantează prestarea continuă pe durata pachetului ales',
  'Pentru rezervare se percepe avans',
];

const fairMoments = [
  {
    eyebrow: 'Prezență vizibilă',
    title: 'Stand care atrage instant',
    text: 'Lumina, mirosul de desert proaspăt și plating-ul clar fac rulota ușor de reperat și ușor de ținut minte.',
    highlight: 'Bun pentru zone cu trafic mare și flux continuu de public.',
    tags: ['târguri', 'festivaluri', 'piețe'],
    image: gogosiCiocolataFructe,
  },
  {
    eyebrow: 'Operare fluidă',
    title: 'Servire rapidă, fără haos vizual',
    text: 'Formatul FISTIC funcționează bine în evenimente dinamice: comandă ușor de înțeles, produs fotogenic și livrare coerentă.',
    highlight: 'Se potrivește atât pentru seri aglomerate, cât și pentru intervale corporate.',
    tags: ['private', 'corporate', 'street food'],
    image: clatiteCapsuni,
  },
  {
    eyebrow: 'Memorabilitate',
    title: 'Brand dulce, nu doar produs bun',
    text: 'Oamenii nu rețin doar desertul, ci și oprirea: cromatica, atmosfera și felul în care arată tot setup-ul.',
    highlight: 'Genul de prezență care merge bine și în poze, și în recomandări.',
    tags: ['instagram', 'recomandări', 'revenire'],
    image: gogosiFistic,
  },
];

const eventVideos = [
  {
    mp4Src: '/1.mp4',
    webmSrc: '/1.webm',
    posterSrc: '/1-poster.jpg',
    title: 'FISTIC la alt eveniment',
    text: 'Un setup care atrage rapid oamenii și deschide pofta de desert live.',
    ctaLabel: 'Vezi pachetele pentru evenimentul tău',
  },
  {
    mp4Src: '/2.mp4',
    webmSrc: '/2.webm',
    posterSrc: '/2-poster.jpg',
    title: 'Atmosfera care adună lumea',
    text: 'Rulota funcționează bine în flux de public, cu servire clară și produs fotogenic.',
    ctaLabel: 'Alege un pachet pentru eveniment',
  },
  {
    mp4Src: '/3.mp4',
    webmSrc: '/3.webm',
    posterSrc: '/3-poster.jpg',
    title: 'Prezență memorabilă în teren',
    text: 'Brandul, culorile și deserturile creează un punct de atracție ușor de remarcat.',
    ctaLabel: 'Descoperă pachetele disponibile',
  },
  {
    mp4Src: '/4.mp4',
    webmSrc: '/4.webm',
    posterSrc: '/4-poster.jpg',
    title: 'Mai mult decât un desert',
    text: 'FISTIC aduce experiența live potrivită pentru târguri, privat și corporate.',
    ctaLabel: 'Mergi la secțiunea pachete',
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: InstagramBrandIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/andreigrigore.mitrachepredut',
    icon: FacebookBrandIcon,
  },
  {
    label: `TikTok: ${tiktokHandle}`,
    href: tiktokUrl,
    icon: TikTokBrandIcon,
  },
];

export const metadata: Metadata = {
  title: 'Clătite și mini-gogoși FISTIC',
  description: siteConfig.description,
  keywords: [
    'clătite FISTIC',
    'mini-gogoși FISTIC',
    'deserturi pentru evenimente',
    'rulota FISTIC',
    'food truck deserturi',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
};

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: [`${siteConfig.url}/opengraph-image`],
    logo: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    priceRange: '$$',
    servesCuisine: ['Dessert', 'Clatite', 'Mini-gogosi'],
    sameAs: [...siteConfig.socialLinks],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <PillNav
        items={[
          { label: 'Meniu & Galerie', href: '#galerie' },
          { label: 'Video', href: '#evenimente' },
          { label: 'Servicii', href: '#servicii' },
          { label: 'Contact', href: '#contact' },
        ]}
        baseColor={colors.chocolate}
        pillColor={colors.creamSoft}
        pillTextColor={colors.chocolate}
        hoveredPillTextColor={colors.creamSoft}
        initialLoadAnimation={false}
        align="start"
      />

      <a
        href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappInfoMessage)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Scrie-ne pe WhatsApp"
        className="fixed bottom-5 right-5 z-[1000] inline-flex h-16 w-16 items-center justify-center rounded-full shadow-[0_18px_45px_rgba(224,64,102,0.35)] transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: colors.raspberry }}
      >
        <WhatsAppBrandIcon className="h-7 w-7 text-white" />
      </a>

      <main
        id="hero"
        className="relative overflow-x-hidden"
        style={{ backgroundColor: colors.cream, color: colors.chocolate }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-24 top-16 h-72 w-72 rounded-full blur-3xl opacity-50"
            style={{ backgroundColor: colors.pistachioSoft }}
          />
          <div
            className="absolute right-[-4rem] top-32 h-80 w-80 rounded-full blur-3xl opacity-35"
            style={{ backgroundColor: colors.raspberry }}
          />
          <div
            className="absolute left-1/2 top-[34rem] h-64 w-64 -translate-x-1/2 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: colors.pistachio }}
          />
          {[
            'left-[8%] top-[14%]',
            'left-[18%] top-[28%]',
            'right-[16%] top-[18%]',
            'right-[10%] top-[30%]',
            'left-[14%] top-[68%]',
            'right-[12%] top-[74%]',
          ].map((position, index) => (
            <span
              key={position}
              className={`absolute ${position} h-4 w-10 rounded-full opacity-40 animate-pulse`}
              style={{
                backgroundColor: index % 2 === 0 ? colors.pistachio : colors.raspberry,
                animationDuration: `${3.5 + index}s`,
              }}
            />
          ))}
        </div>

        <section className="relative mx-auto grid min-h-screen max-w-7xl gap-12 px-6 pb-16 pt-24 sm:gap-16 sm:pb-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-32">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="relative mb-8 w-fit">
              <ShinyText
                text="FISTIC"
                speed={3.2}
                color={colors.chocolate}
                shineColor={colors.creamSoft}
                spread={100}
                className="text-4xl font-extrabold tracking-[0.22em] sm:text-5xl lg:text-6xl"
              />
              <span
                className="absolute -bottom-5 left-7 text-4xl sm:-bottom-6 sm:left-10 sm:text-5xl lg:text-6xl"
                style={{ color: colors.pistachio, transform: 'rotate(-7deg)', fontFamily: scriptFont }}
              >
                fistic
              </span>
            </div>

            <h1
              className="max-w-2xl text-4xl leading-[0.98] sm:text-5xl lg:text-7xl"
              style={{ fontFamily: displayFont }}
            >
              Zâmbete glazurate &amp; clătite fermecate.
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 lg:max-w-2xl lg:text-xl"
              style={{ color: colors.chocolateSoft }}
            >
              Rulota FISTIC aduce pauza perfectă de dulce la târguri, evenimente private și activări
              corporate. Gogoși calde, clătite fine și o atmosferă de poveste, oriunde apare.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#galerie"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${colors.raspberry} 0%, ${colors.raspberryDeep} 100%)`,
                }}
              >
                Vezi bunătățile
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-base font-semibold transition-colors duration-300"
                style={{
                  borderColor: 'rgba(61, 35, 20, 0.15)',
                  backgroundColor: 'rgba(253, 246, 227, 0.84)',
                }}
              >
                Rezervă rulota pentru eveniment
              </a>
            </div>

            <div
              className="mt-10 w-full max-w-xl rounded-[28px] border px-5 py-4 text-center text-sm leading-7 backdrop-blur-sm sm:text-base lg:w-fit lg:max-w-none lg:text-left"
              style={{
                borderColor: 'rgba(61, 35, 20, 0.12)',
                backgroundColor: 'rgba(253, 246, 227, 0.72)',
              }}
            >
              <span className="font-semibold">3 aprilie - 3 mai</span>, cu posibilitate de activări
              private și corporate în perioada evenimentului.
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <HeroTiltedCarousel items={heroCarouselItems} />
          </div>
        </section>

        <section id="galerie" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex max-w-3xl flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <span
              className="inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: 'rgba(224, 64, 102, 0.12)',
                color: colors.raspberryDeep,
              }}
            >
              Meniu vizual & galerie
            </span>
            <h2 className="text-3xl sm:text-5xl" style={{ fontFamily: displayFont }}>
              Ce pregătim bun?
            </h2>
          </div>

          <div className="mt-12 rounded-[36px] border p-4 sm:p-6" style={{ borderColor: 'rgba(61, 35, 20, 0.12)' }}>
            <Masonry
              items={menuItems}
              duration={0.7}
              stagger={0.08}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.98}
              blurToFocus
            />
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {fairMoments.map((moment, index) => (
              <BorderGlow
                key={moment.title}
                className="h-full border-white/0"
                borderRadius={30}
                glowColor={index === 1 ? '342 72% 58%' : '92 42% 63%'}
                backgroundColor={colors.creamSoft}
                glowRadius={28}
                glowIntensity={0.7}
                animated={index === 0}
                colors={[colors.pistachioSoft, colors.raspberry, '#f7d7a8']}
                fillOpacity={0.35}
              >
                <article className="flex h-full flex-col p-4">
                  <div className="relative overflow-hidden rounded-[26px]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      className="h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/75 via-[#3D2314]/18 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex rounded-full bg-[#FDF6E3]/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3D2314] shadow-sm">
                      {moment.eyebrow}
                    </div>
                    <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E04066] text-sm font-bold text-white shadow-sm">
                      0{index + 1}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3
                        className="max-w-[14ch] text-2xl leading-tight text-[#FDF6E3]"
                        style={{ fontFamily: displayFont }}
                      >
                        {moment.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <p className="text-base leading-7" style={{ color: colors.chocolateSoft }}>
                      {moment.text}
                    </p>

                    <div
                      className="mt-5 rounded-[22px] border px-4 py-4 text-sm leading-6"
                      style={{
                        borderColor: 'rgba(61, 35, 20, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.62)',
                        color: colors.chocolate,
                      }}
                    >
                      {moment.highlight}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {moment.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]"
                          style={{
                            backgroundColor:
                              index === 1 ? 'rgba(224, 64, 102, 0.12)' : 'rgba(147, 197, 114, 0.16)',
                            color: colors.chocolate,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </BorderGlow>
            ))}
          </div>
        </section>

        <section id="evenimente" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex max-w-3xl flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <span
              className="inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: 'rgba(147, 197, 114, 0.16)',
                color: colors.chocolate,
              }}
            >
              Alte evenimente
            </span>
            <h2 className="text-3xl sm:text-5xl" style={{ fontFamily: displayFont }}>
              Cum arată FISTIC și în alte locuri unde am fost.
            </h2>
            <p className="max-w-2xl text-lg leading-8" style={{ color: colors.chocolateSoft }}>
              Câteva cadre video din alte evenimente, ca să vezi atmosfera, prezența rulotei și
              felul în care se mișcă serviciul live.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {eventVideos.map((video, index) => (
              <BorderGlow
                key={video.mp4Src}
                className="h-full border-white/0"
                borderRadius={32}
                glowColor={index % 2 === 0 ? '92 42% 63%' : '342 72% 58%'}
                backgroundColor={colors.creamSoft}
                glowRadius={26}
                glowIntensity={0.62}
                colors={[colors.pistachioSoft, colors.raspberry, '#ffd4b8']}
                fillOpacity={0.24}
              >
                <article className="flex h-full flex-col p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-[28px] border border-[rgba(61,35,20,0.08)] bg-[#fffaf3]">
                    <video
                      className="h-full max-h-[520px] w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster={video.posterSrc}
                    >
                      <source src={video.webmSrc} type="video/webm" />
                      <source src={video.mp4Src} type="video/mp4" />
                    </video>
                  </div>

                  <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                    <div className="inline-flex w-fit rounded-full bg-[rgba(255,255,255,0.72)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3D2314]">
                      Eveniment 0{index + 1}
                    </div>
                    <h3 className="mt-4 text-2xl" style={{ fontFamily: displayFont }}>
                      {video.title}
                    </h3>
                    <p className="mt-3 text-base leading-7" style={{ color: colors.chocolateSoft }}>
                      {video.text}
                    </p>

                    <div className="mt-6">
                      <a
                        href="#servicii"
                        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:text-base"
                        style={{
                          background: `linear-gradient(135deg, ${colors.raspberry} 0%, ${colors.raspberryDeep} 100%)`,
                        }}
                      >
                        {video.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </BorderGlow>
            ))}
          </div>
        </section>

        <section id="servicii" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div
            className="absolute inset-x-6 top-8 -z-10 h-[280px] rounded-[44px] blur-3xl lg:inset-x-10"
            style={{
              background:
                'radial-gradient(circle at 18% 30%, rgba(147,197,114,0.24) 0%, transparent 34%), radial-gradient(circle at 78% 24%, rgba(224,64,102,0.20) 0%, transparent 30%), radial-gradient(circle at 50% 80%, rgba(255,212,184,0.36) 0%, transparent 38%)',
            }}
          />

          <div
            className="overflow-hidden rounded-[28px] border p-4 sm:rounded-[40px] sm:p-8 lg:p-10"
            style={{
              borderColor: 'rgba(61, 35, 20, 0.1)',
              background:
                'linear-gradient(135deg, rgba(255,250,243,0.96) 0%, rgba(253,246,227,0.94) 52%, rgba(169,194,129,0.14) 100%)',
            }}
          >
            <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
                <span
                  className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.18em]"
                  style={{
                    backgroundColor: 'rgba(147, 197, 114, 0.14)',
                    color: colors.chocolate,
                  }}
                >
                  🍓 FISTIC – LIVE DESSERT EXPERIENCE
                </span>
                <h2 className="mt-4 text-3xl sm:mt-5 sm:text-5xl lg:text-6xl" style={{ fontFamily: displayFont }}>
                  LISTĂ PACHETE EVENIMENTE
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8" style={{ color: colors.chocolateSoft }}>
                  Oferim servicii de desert live pentru evenimente, unde preparăm clătite pe loc,
                  cu ingrediente premium și un concept organizat pentru flux eficient și
                  experiență plăcută pentru invitați.
                </p>
              </div>

              <div
                className="rounded-[24px] border p-4 text-center sm:rounded-[32px] sm:p-7 lg:text-left"
                style={{
                  borderColor: 'rgba(224, 64, 102, 0.14)',
                  backgroundColor: 'rgba(255,255,255,0.66)',
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-[0.16em]"
                  style={{ color: colors.raspberryDeep }}
                >
                  Concept FISTIC
                </p>
                <p className="mt-3 text-lg leading-7 sm:mt-4 sm:text-xl sm:leading-8" style={{ fontFamily: displayFont, color: colors.chocolate }}>
                  FISTIC – nu vindem doar clătite, ci experiențe.
                </p>
                <div className="relative mx-auto mt-5 w-fit sm:mt-7 lg:mx-0">
                  <ShinyText
                    text="FISTIC"
                    speed={3.4}
                    color={colors.chocolate}
                    shineColor={colors.creamSoft}
                    spread={95}
                    className="text-2xl font-extrabold tracking-[0.18em] sm:text-4xl sm:tracking-[0.26em]"
                  />
                  <span
                    className="absolute -bottom-3 left-5 text-lg sm:-bottom-4 sm:left-8 sm:text-2xl"
                    style={{
                      color: colors.raspberryDeep,
                      transform: 'rotate(-6deg)',
                      fontFamily: scriptFont,
                    }}
                  >
                    experience
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 xl:grid-cols-[1fr_1fr]">
              {eventPackages.map((pkg, index) => (
                <BorderGlow
                  key={pkg.badge}
                  className="h-full border-white/0"
                  borderRadius={32}
                  glowColor={index === 0 ? '92 42% 63%' : '342 72% 58%'}
                  backgroundColor="rgba(255,255,255,0.72)"
                  glowRadius={24}
                  glowIntensity={0.42}
                  edgeSensitivity={52}
                  colors={[colors.pistachioSoft, colors.raspberry, '#ffd4b8']}
                  fillOpacity={0}
                >
                  <div className="flex h-full flex-col p-4 sm:p-8">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div>
                        <h3
                          className="inline-flex whitespace-pre-line rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.16em]"
                          style={{
                            backgroundColor: pkg.accent,
                            color: colors.chocolate,
                            fontFamily: displayFont,
                          }}
                        >
                          {pkg.title}
                        </h3>
                      </div>
                      <div
                        className="min-w-[72px] rounded-[18px] px-3 py-2 text-center sm:min-w-[92px] sm:rounded-[22px] sm:px-4 sm:py-3"
                        style={{ backgroundColor: pkg.accent }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]">de la</p>
                        <p className="mt-1 text-lg sm:text-2xl" style={{ fontFamily: displayFont }}>
                          {pkg.pricing[0]?.split('–')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7" style={{ color: colors.chocolateSoft }}>
                      {pkg.description}
                    </p>

                    <div className="mt-5 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em]">Include</p>
                        <ul
                          className="mt-3 space-y-2 text-sm leading-6 sm:mt-4 sm:space-y-3 sm:text-base sm:leading-7"
                          style={{ color: colors.chocolateSoft }}
                        >
                          {pkg.includes.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span style={{ color: index === 0 ? colors.pistachio : colors.raspberryDeep }}>
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className="rounded-[20px] border p-4 sm:rounded-[24px] sm:p-5"
                        style={{
                          borderColor: pkg.border,
                          background:
                            'linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(253,246,227,0.92) 100%)',
                        }}
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                          Durată și preț
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5">
                          {pkg.pricing.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                              style={{
                                borderColor: pkg.border,
                                backgroundColor: 'rgba(255,255,255,0.72)',
                                color: colors.chocolate,
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end pt-1 sm:mt-8 sm:pt-2">
                      <StarBorder
                        as="a"
                        href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(pkg.ctaMessage)}`}
                        target="_blank"
                        rel="noreferrer"
                        color={index === 0 ? '#b9e29b' : '#ff86ad'}
                        speed="4s"
                        thickness={6}
                        className="block w-full sm:w-auto"
                        innerClassName="border-white/10 bg-[linear-gradient(180deg,rgba(28,24,21,0.98)_0%,rgba(12,10,9,1)_100%)] px-4 py-2.5 text-[#FDF6E3] shadow-[0_14px_34px_rgba(17,12,10,0.28)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-[26px] sm:py-[16px]"
                      >
                        <span className="inline-flex items-center gap-2 text-sm sm:text-base" style={{ fontFamily: displayFont }}>
                          {pkg.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </StarBorder>
                    </div>
                  </div>
                </BorderGlow>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              <div
                className="rounded-[24px] border p-4 sm:rounded-[32px] sm:p-8"
                style={{
                  borderColor: 'rgba(61, 35, 20, 0.1)',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.76) 0%, rgba(253,246,227,0.9) 100%)',
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">⚙️ OPȚIONALE</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 sm:mt-5 sm:space-y-3 sm:text-base sm:leading-7" style={{ color: colors.chocolateSoft }}>
                  {eventOptionalItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span style={{ color: colors.pistachio }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-[24px] border p-4 sm:rounded-[32px] sm:p-8"
                style={{
                  borderColor: 'rgba(61, 35, 20, 0.1)',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(253,246,227,0.96) 46%, rgba(224,64,102,0.07) 100%)',
                }}
              >
                <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]">📌 MENȚIUNI</p>
                    <ul
                      className="mt-4 space-y-2 text-sm leading-6 sm:mt-5 sm:space-y-3 sm:text-base sm:leading-7"
                      style={{ color: colors.chocolateSoft }}
                    >
                      {eventNotes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span style={{ color: colors.raspberryDeep }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-[20px] border p-4 sm:rounded-[26px] sm:p-6"
                    style={{
                      borderColor: 'rgba(224, 64, 102, 0.14)',
                      backgroundColor: 'rgba(224, 64, 102, 0.06)',
                    }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]">📞 Contact</p>
                    <p className="mt-3 text-sm leading-6 sm:text-base sm:leading-7" style={{ color: colors.chocolateSoft }}>
                      Pentru disponibilitate și rezervări:
                    </p>
                    <p
                      className="mt-4 text-lg leading-7 sm:mt-5 sm:text-xl sm:leading-8"
                      style={{ fontFamily: displayFont, color: colors.chocolate }}
                    >
                      Telefon / WhatsApp
                    </p>
                    <p className="text-sm leading-6 sm:text-base sm:leading-7" style={{ color: colors.chocolate }}>
                      {phoneDisplay}
                    </p>
                    <p
                      className="mt-3 text-lg leading-7 sm:mt-4 sm:text-xl sm:leading-8"
                      style={{ fontFamily: displayFont, color: colors.chocolate }}
                    >
                      Email
                    </p>
                    <p className="break-all text-sm leading-6 sm:text-base sm:leading-7" style={{ color: colors.chocolate }}>
                      {emailAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div
            className="overflow-hidden rounded-[40px] border p-6 sm:p-10"
            style={{
              borderColor: 'rgba(61, 35, 20, 0.1)',
              background:
                'linear-gradient(135deg, rgba(253,246,227,0.94) 0%, rgba(255,250,243,0.98) 45%, rgba(169,194,129,0.20) 100%)',
            }}
          >
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="text-center lg:text-left">
                <span
                  className="inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{
                    backgroundColor: 'rgba(224, 64, 102, 0.12)',
                    color: colors.raspberryDeep,
                  }}
                >
                  Contact simplu & rapid
                </span>
                <h2 className="mt-5 text-4xl sm:text-5xl" style={{ fontFamily: displayFont }}>
                  Hai să vorbim!
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 lg:mx-0" style={{ color: colors.chocolateSoft }}>
                  Vrei rulota FISTIC la evenimentul tău sau ai o întrebare? Scrie-ne, sună-ne
                  sau trimite-ne un mesaj rapid pe WhatsApp și stabilim împreună cea mai dulce
                  apariție din program.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {['Târguri', 'Evenimente private', 'Corporate', 'Activări sezoniere'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full px-4 py-2 text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(147, 197, 114, 0.16)',
                          color: colors.chocolate,
                        }}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="rounded-[28px] border p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(61, 35, 20, 0.1)',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                  }}
                >
                  <Phone className="h-6 w-6" style={{ color: colors.raspberryDeep }} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">Telefon</p>
                  <p className="mt-2 text-2xl" style={{ fontFamily: displayFont }}>{phoneDisplay}</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Apel direct de pe mobil.
                  </p>
                </a>

                <a
                  href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappBookingMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[28px] border p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(224, 64, 102, 0.18)',
                    backgroundColor: 'rgba(224, 64, 102, 0.08)',
                  }}
                >
                  <WhatsAppBrandIcon className="h-6 w-6" style={{ color: colors.raspberryDeep }} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">WhatsApp</p>
                  <p className="mt-2 text-2xl" style={{ fontFamily: displayFont }}>Mesaj rapid</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Deschide direct conversația și pornim de la detaliile evenimentului.
                  </p>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="rounded-[28px] border p-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(61, 35, 20, 0.1)',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                  }}
                >
                  <Mail className="h-6 w-6" style={{ color: colors.pistachio }} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">Email</p>
                  <p
                    className="mt-2 break-all text-lg sm:text-xl"
                    style={{ fontFamily: displayFont }}
                  >
                    {emailAddress}
                  </p>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Potrivit pentru cereri corporate sau colaborări planificate.
                  </p>
                </a>

                <div
                  className="rounded-[28px] border p-6"
                  style={{
                    borderColor: 'rgba(61, 35, 20, 0.1)',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                  }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                    Urmărește-ne
                  </p>
                  <p className="mt-3 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Vezi cum arată cele mai noi bunătăți FISTIC și ce mai pregătim.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target={social.href.startsWith('http') ? '_blank' : undefined}
                          rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                          style={{
                            backgroundColor: 'rgba(147, 197, 114, 0.14)',
                            color: colors.chocolate,
                          }}
                        >
                          <Icon className="h-3 w-3" />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-6 pb-12 pt-4 lg:px-10">
          <div
            className="flex flex-col gap-8 rounded-[32px] border px-6 py-8 md:flex-row md:items-center md:justify-between"
            style={{
              borderColor: 'rgba(61, 35, 20, 0.1)',
              backgroundColor: 'rgba(253, 246, 227, 0.84)',
            }}
          >
            <div>
              <div className="relative w-fit">
                <ShinyText
                  text="FISTIC"
                  speed={3}
                  color={colors.chocolate}
                  shineColor={colors.creamSoft}
                  className="text-3xl font-extrabold tracking-[0.24em]"
                />
                <span
                  className="absolute -bottom-4 left-6 text-3xl"
                  style={{ color: colors.pistachio, fontFamily: scriptFont }}
                >
                  fistic
                </span>
              </div>
              <p className="mt-6 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                © 2026 FISTIC. Toate drepturile rezervate.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium" style={{ color: colors.chocolateSoft }}>
              <Link href="/termeni-si-conditii" className="transition-colors hover:text-[#3D2314]">
                Termeni și Condiții
              </Link>
              <Link href="/politica-de-confidentialitate" className="transition-colors hover:text-[#3D2314]">
                Politica de Confidențialitate
              </Link>
              <Link href="/anpc" className="transition-opacity hover:opacity-85" aria-label="Informații ANPC">
                <Image
                  src={anpcLogo}
                  alt="ANPC"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
