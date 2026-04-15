import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Music4,
  PartyPopper,
  Phone,
  Sparkles,
  Store,
} from 'lucide-react';

import BorderGlow from '@/components/BorderGlow';
import Masonry from '@/components/Masonry';
import PillNav from '@/components/PillNav';
import ShinyText from '@/components/ShinyText';
import TiltedCard from '@/components/TiltedCard';

import clatiteCapsuni from '@/assets/clatite_cu_capsuni.png';
import clatiteFistic from '@/assets/clatite_cu_fistic.png';
import clatiteOreo from '@/assets/clatite_cu_oreo.png';
import gogosiBomboane from '@/assets/gogosi_cu_bomboane.png';
import gogosiCiocolataFructe from '@/assets/gogosi-cu-ciocolata-si-fructe.png';
import gogosiFistic from '@/assets/gogosi-cu-fistic.png';

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

const displayFont = "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif";
const scriptFont = "'Snell Roundhand', 'Brush Script MT', 'Segoe Script', cursive";

const menuItems = [
  {
    id: 'clatita-fistic',
    img: clatiteFistic.src,
    title: 'Clatita Signature cu Fistic',
    subtitle: 'Cremoasa, verde si memorabila din prima privire.',
    height: 720,
    url: '#contact',
  },
  {
    id: 'oreo-alba',
    img: clatiteOreo.src,
    title: 'Clatita Oreo & Ciocolata Alba',
    subtitle: 'Texturi contrastante si un finish generos.',
    height: 640,
    url: '#contact',
  },
  {
    id: 'capsuni',
    img: clatiteCapsuni.src,
    title: 'Clatita cu Capsuni',
    subtitle: 'Fructata, proaspata si perfecta pentru pofta de weekend.',
    height: 560,
    url: '#contact',
  },
  {
    id: 'fructe-padure',
    img: gogosiCiocolataFructe.src,
    title: 'Mini-Gogosi cu Fructe',
    subtitle: 'Glazuri bogate si topping-uri care atrag instant.',
    height: 700,
    url: '#contact',
  },
  {
    id: 'gogosi-fistic',
    img: gogosiFistic.src,
    title: 'Mini-Gogosi cu Fistic',
    subtitle: 'Crocante la exterior, moi in interior, cu accent de brand.',
    height: 620,
    url: '#contact',
  },
  {
    id: 'gogosi-bomboane',
    img: gogosiBomboane.src,
    title: 'Mini-Gogosi cu Bomboane',
    subtitle: 'Jucause, colorate si facute pentru momente festive.',
    height: 540,
    url: '#contact',
  },
];

const serviceCards = [
  {
    icon: Store,
    title: 'Festivaluri & targuri',
    text: 'Prezenta dulce la Targul de Craciun, Targul de Paste si evenimente street food din Craiova.',
  },
  {
    icon: PartyPopper,
    title: 'Evenimente private',
    text: 'Zile de nastere, botezuri, nunti atipice sau petreceri unde rulota trebuie sa fie vedeta serii.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate & HoReCa',
    text: 'Activari de brand, weekenduri tematice, colaborari cu restaurante si evenimente de echipa.',
  },
];

const fairMoments = [
  {
    title: 'Atmosfera de targ',
    text: 'Lumini calde, miros de aluat proaspat si deserturi care aduna oamenii in jurul rulotei.',
    image: gogosiCiocolataFructe,
  },
  {
    title: 'Ritm de weekend',
    text: 'Servire rapida, plating vesel si o prezenta care merge la fel de bine in parc, piata sau festival.',
    image: clatiteCapsuni,
  },
  {
    title: 'Momente care raman',
    text: 'FISTIC nu e doar un desert, ci o oprire dulce pe care lumea o cauta din nou la urmatorul eveniment.',
    image: gogosiFistic,
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: '#contact',
    icon: Camera,
  },
  {
    label: 'Facebook',
    href: '#contact',
    icon: MessagesSquare,
  },
  {
    label: 'TikTok',
    href: '#contact',
    icon: Music4,
  },
];

const navLogo = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <rect width="96" height="96" rx="48" fill="${colors.pistachio}"/>
  <path d="M30 24h38v10H42v12h22v10H42v16H30V24Z" fill="${colors.chocolate}"/>
  <circle cx="70" cy="26" r="7" fill="${colors.raspberry}"/>
</svg>
`)}`;

export const metadata: Metadata = {
  title: 'FISTIC | Clatite si mini-gogosi in Craiova',
  description:
    'Landing page de prezentare pentru rulota FISTIC: clatite fine, mini-gogosi spectaculoase si servicii pentru targuri, evenimente private si colaborari corporate.',
};

export default function Home() {
  return (
    <>
      <PillNav
        logo={navLogo}
        logoHref="#hero"
        logoAlt="Logo FISTIC"
        items={[
          { label: 'Meniu & Galerie', href: '#galerie' },
          { label: 'Servicii', href: '#servicii' },
          { label: 'Contact', href: '#contact' },
        ]}
        baseColor={colors.chocolate}
        pillColor={colors.creamSoft}
        pillTextColor={colors.chocolate}
        hoveredPillTextColor={colors.creamSoft}
        initialLoadAnimation={false}
      />

      <a
        href="https://wa.me/40700000000?text=Salut!%20Vreau%20sa%20aflu%20mai%20multe%20despre%20FISTIC."
        target="_blank"
        rel="noreferrer"
        aria-label="Scrie-ne pe WhatsApp"
        className="fixed bottom-5 right-5 z-[1000] inline-flex h-16 w-16 items-center justify-center rounded-full shadow-[0_18px_45px_rgba(224,64,102,0.35)] transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: colors.raspberry }}
      >
        <MessageCircle className="h-7 w-7 text-white" />
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

        <section className="relative mx-auto grid min-h-screen max-w-7xl gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <div
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{
                backgroundColor: 'rgba(147, 197, 114, 0.14)',
                color: colors.chocolate,
              }}
            >
              <Sparkles className="h-4 w-4" />
              Fistic Craiova
            </div>

            <div className="relative mb-10 w-fit">
              <ShinyText
                text="FISTIC"
                speed={3.2}
                color={colors.chocolate}
                shineColor={colors.creamSoft}
                spread={100}
                className="text-5xl font-extrabold tracking-[0.3em] sm:text-6xl"
              />
              <span
                className="absolute -bottom-6 left-10 text-5xl sm:text-6xl"
                style={{ color: colors.pistachio, transform: 'rotate(-7deg)', fontFamily: scriptFont }}
              >
                fistic
              </span>
            </div>

            <h1
              className="max-w-2xl text-5xl leading-[0.96] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: displayFont }}
            >
              Zambete glazurate &amp; clatite fermecate.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl" style={{ color: colors.chocolateSoft }}>
              Rulota FISTIC este pauza ta de dulce la Targurile de Craciun si Paste din
              Craiova. Gogosi calde, clatite fine si o atmosfera de poveste, chiar la tine in
              oras.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#galerie"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${colors.raspberry} 0%, ${colors.raspberryDeep} 100%)`,
                }}
              >
                Vezi bunatatile
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
                Rezerva rulota pentru eveniment
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                'Clatite fine si mini-gogosi cu plating spectaculos',
                'Weekend de weekend, acolo unde orasul vrea ceva dulce',
                'Format potrivit pentru targuri, petreceri si colaborari',
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-[28px] border px-5 py-4 text-sm leading-6 backdrop-blur-sm"
                  style={{
                    borderColor: 'rgba(61, 35, 20, 0.12)',
                    backgroundColor: 'rgba(253, 246, 227, 0.72)',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="grid w-full max-w-2xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="md:row-span-2">
                <TiltedCard
                  imageSrc={clatiteFistic.src}
                  altText="Clatita signature cu fistic"
                  captionText="Clatita Signature cu Fistic"
                  containerHeight="520px"
                  imageHeight="520px"
                  imageWidth="100%"
                  containerWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.03}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={
                    <div className="m-4 inline-flex rounded-full bg-[#FAF0E6]/92 px-4 py-2 text-sm font-semibold text-[#3D2314] shadow-lg">
                      Signature cu fistic
                    </div>
                  }
                />
              </div>

              <TiltedCard
                imageSrc={gogosiCiocolataFructe.src}
                altText="Mini-gogosi cu fructe si ciocolata"
                captionText="Mini-Gogosi cu Fructe"
                containerHeight="250px"
                imageHeight="250px"
                imageWidth="100%"
                containerWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.04}
                showMobileWarning={false}
                displayOverlayContent
                overlayContent={
                  <div className="m-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    Weekend hit
                  </div>
                }
              />

              <TiltedCard
                imageSrc={clatiteOreo.src}
                altText="Clatita cu Oreo si ciocolata alba"
                captionText="Oreo & Ciocolata Alba"
                containerHeight="250px"
                imageHeight="250px"
                imageWidth="100%"
                containerWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.04}
                showMobileWarning={false}
                displayOverlayContent
                overlayContent={
                  <div
                    className="m-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: 'rgba(147, 197, 114, 0.92)', color: colors.chocolate }}
                  >
                    Oreo & ciocolata alba
                  </div>
                }
              />
            </div>
          </div>
        </section>

        <section id="galerie" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <span
              className="inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: 'rgba(224, 64, 102, 0.12)',
                color: colors.raspberryDeep,
              }}
            >
              Meniu vizual & galerie
            </span>
            <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: displayFont }}>
              Ce pregatim bun?
            </h2>
            <p className="text-lg leading-8" style={{ color: colors.chocolateSoft }}>
              Exact ce trebuie pentru un stand memorabil: produse fotogenice, topping-uri generoase
              si o prezentare care deschide pofta din primul scroll.
            </p>
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
                <div className="h-full p-5">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      className="h-64 w-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <h3 className="mt-5 text-2xl" style={{ fontFamily: displayFont }}>
                    {moment.title}
                  </h3>
                  <p className="mt-3 text-base leading-7" style={{ color: colors.chocolateSoft }}>
                    {moment.text}
                  </p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </section>

        <section id="servicii" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <BorderGlow
              className="border-white/0"
              borderRadius={36}
              glowColor="92 42% 63%"
              backgroundColor={colors.pistachioSoft}
              glowRadius={34}
              glowIntensity={0.85}
              animated
              colors={[colors.pistachio, '#d4efb4', colors.creamSoft]}
              fillOpacity={0.3}
            >
              <div className="p-8 sm:p-10">
                <div className="inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#3D2314]">
                  Locatia curenta
                </div>
                <div className="mt-8 flex items-start gap-4">
                  <div className="rounded-full bg-white/75 p-3 text-[#3D2314]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl text-[#3D2314]" style={{ fontFamily: displayFont }}>
                      Ne gasesti weekendul acesta la:
                    </p>
                    <p className="mt-3 text-lg leading-8 text-[#3D2314]">
                      Targul de Paste Craiova, Parcul Nicolae Romanescu.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-white/65 p-5 text-[#3D2314]">
                    <Clock3 className="h-5 w-5" />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]">
                      Program de weekend
                    </p>
                    <p className="mt-2 text-base leading-7">
                      Dupa-amieze lungi, seri aglomerate si deserturi pregatite continuu.
                    </p>
                  </div>
                  <div className="rounded-[24px] bg-white/65 p-5 text-[#3D2314]">
                    <Sparkles className="h-5 w-5" />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]">
                      Experienta de brand
                    </p>
                    <p className="mt-2 text-base leading-7">
                      Ambianta luminoasa, miros de dulce cald si plating care merita fotografiat.
                    </p>
                  </div>
                </div>
              </div>
            </BorderGlow>

            <div className="flex flex-col justify-between">
              <div className="max-w-2xl">
                <span
                  className="inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{
                    backgroundColor: 'rgba(147, 197, 114, 0.14)',
                    color: colors.chocolate,
                  }}
                >
                  Unde ne gasesti & serviciile noastre
                </span>
                <h2 className="mt-5 text-4xl sm:text-5xl" style={{ fontFamily: displayFont }}>
                  Rulota care se potriveste perfect cu evenimente vii.
                </h2>
                <p className="mt-5 text-lg leading-8" style={{ color: colors.chocolateSoft }}>
                  FISTIC functioneaza bine atat ca punct de atractie intr-un targ aglomerat, cat
                  si ca activare dulce pentru evenimente private sau colaborari corporate.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {serviceCards.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <BorderGlow
                      key={service.title}
                      className="h-full border-white/0"
                      borderRadius={28}
                      glowColor={index === 1 ? '342 72% 58%' : '92 42% 63%'}
                      backgroundColor={colors.creamSoft}
                      glowRadius={24}
                      glowIntensity={0.65}
                      colors={[colors.pistachioSoft, colors.raspberry, '#ffd4b8']}
                      fillOpacity={0.25}
                    >
                      <div className="h-full p-6">
                        <div
                          className="inline-flex rounded-full p-3"
                          style={{ backgroundColor: 'rgba(147, 197, 114, 0.15)' }}
                        >
                          <Icon className="h-5 w-5" style={{ color: colors.chocolate }} />
                        </div>
                        <h3 className="mt-5 text-2xl" style={{ fontFamily: displayFont }}>
                          {service.title}
                        </h3>
                        <p className="mt-3 text-base leading-7" style={{ color: colors.chocolateSoft }}>
                          {service.text}
                        </p>
                      </div>
                    </BorderGlow>
                  );
                })}
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
              <div>
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
                  Hai sa vorbim!
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8" style={{ color: colors.chocolateSoft }}>
                  Vrei rulota FISTIC la evenimentul tau sau ai o intrebare? Scrie-ne, suna-ne
                  sau trimite-ne un mesaj rapid pe WhatsApp si stabilim impreuna cea mai dulce
                  aparitie din program.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Targuri', 'Evenimente private', 'Corporate', 'Craiova & imprejurimi'].map(
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
                  href="tel:+40700000000"
                  className="rounded-[28px] border p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(61, 35, 20, 0.1)',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                  }}
                >
                  <Phone className="h-6 w-6" style={{ color: colors.raspberryDeep }} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">Telefon</p>
                  <p className="mt-2 text-2xl" style={{ fontFamily: displayFont }}>07XX XXX XXX</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Link direct pentru apel de pe mobil.
                  </p>
                </a>

                <a
                  href="https://wa.me/40700000000?text=Salut!%20Vreau%20sa%20rezerv%20rulota%20FISTIC."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[28px] border p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(224, 64, 102, 0.18)',
                    backgroundColor: 'rgba(224, 64, 102, 0.08)',
                  }}
                >
                  <MessageCircle className="h-6 w-6" style={{ color: colors.raspberryDeep }} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">WhatsApp</p>
                  <p className="mt-2 text-2xl" style={{ fontFamily: displayFont }}>Mesaj rapid</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Deschide direct conversatia si pornim de la detaliile evenimentului.
                  </p>
                </a>

                <a
                  href="mailto:salut@fistic-craiova.ro"
                  className="rounded-[28px] border p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: 'rgba(61, 35, 20, 0.1)',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                  }}
                >
                  <Mail className="h-6 w-6" style={{ color: colors.pistachio }} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">Email</p>
                  <p className="mt-2 text-2xl" style={{ fontFamily: displayFont }}>salut@fistic-craiova.ro</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Potrivit pentru cereri corporate sau colaborari planificate.
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
                    Urmareste-ne
                  </p>
                  <p className="mt-3 text-sm leading-6" style={{ color: colors.chocolateSoft }}>
                    Vezi unde parcam urmatoarea data si cum arata cele mai noi bunatati FISTIC.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                          style={{
                            backgroundColor: 'rgba(147, 197, 114, 0.14)',
                            color: colors.chocolate,
                          }}
                        >
                          <Icon className="h-4 w-4" />
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
                © 2026 FISTIC Craiova. Toate drepturile rezervate.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium" style={{ color: colors.chocolateSoft }}>
              <span>Termeni si Conditii</span>
              <span>Politica de Confidentialitate</span>
              <span>ANPC</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
