import type { Metadata } from 'next';

import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Politica de Confidentialitate | FISTIC',
  description: 'Politica de confidentialitate pentru site-ul FISTIC Craiova.',
  alternates: {
    canonical: '/politica-de-confidentialitate',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Politica de Confidentialitate" updatedAt="15 aprilie 2026">
      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">1. Ce date pot fi colectate</h2>
        <p className="mt-3">
          Prin formularele informale de contact, email, telefon sau WhatsApp, FISTIC poate primi
          date precum nume, numar de telefon, adresa de email, numele companiei, intervalul
          evenimentului si alte informatii transmise voluntar de utilizator.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">2. Scopul prelucrarii</h2>
        <p className="mt-3">
          Datele sunt utilizate exclusiv pentru comunicare comerciala, ofertare, programare,
          organizarea colaborarilor si gestionarea solicitarilor primite prin canalele oficiale
          ale brandului.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">3. Durata pastrarii</h2>
        <p className="mt-3">
          Datele sunt pastrate doar pe perioada necesara relationarii comerciale, respectarii
          obligatiilor legale si arhivarii documentelor necesare. Detaliile exacte trebuie
          actualizate dupa stabilirea operatorului si a fluxurilor administrative finale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">4. Drepturile persoanei vizate</h2>
        <p className="mt-3">
          Persoanele care transmit date catre FISTIC pot solicita acces, rectificare, stergere,
          restrictionare sau clarificari privind utilizarea datelor, printr-un mesaj trimis la
          adresa de contact publicata pe site.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">5. Observatie importanta</h2>
        <p className="mt-3">
          Aceasta pagina ofera o versiune initiala de lucru pentru prezenta online a brandului.
          Inainte de publicarea finala, continutul trebuie completat cu datele reale ale
          operatorului economic si verificat juridic.
        </p>
      </section>
    </LegalPageShell>
  );
}
