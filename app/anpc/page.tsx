import type { Metadata } from 'next';

import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Informatii ANPC | FISTIC',
  description: 'Informatii ANPC si asistenta pentru consumatori pentru FISTIC Craiova.',
  alternates: {
    canonical: '/anpc',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AnpcPage() {
  return (
    <LegalPageShell title="Informatii ANPC" updatedAt="15 aprilie 2026">
      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">1. Informare consumatori</h2>
        <p className="mt-3">
          FISTIC isi propune sa solutioneze rapid orice sesizare prin canalele directe de
          contact. Inaintea unei escaladari, recomandam transmiterea situatiei prin telefon,
          email sau WhatsApp, impreuna cu detaliile comenzii ori ale evenimentului.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">2. Solutionare amiabila</h2>
        <p className="mt-3">
          Pentru clarificari privind produse, servicii sau colaborari, utilizatorii pot solicita
          o reevaluare a situatiei direct catre reprezentantii FISTIC. Orice raspuns comercial
          va fi oferit in functie de informatiile disponibile si de documentele aferente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">3. Informatii de completat la publicarea finala</h2>
        <p className="mt-3">
          In versiunea finala a acestei pagini trebuie adaugate datele oficiale ale operatorului,
          procedura interna de reclamatii si, daca este cazul, trimiterile catre resursele ANPC
          relevante pentru activitatea comerciala a brandului.
        </p>
      </section>
    </LegalPageShell>
  );
}
