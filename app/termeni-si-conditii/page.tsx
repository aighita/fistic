import type { Metadata } from 'next';

import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Termeni si Conditii | FISTIC',
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Termeni si Conditii" updatedAt="15 aprilie 2026">
      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">1. Informatii generale</h2>
        <p className="mt-3">
          Aceasta pagina descrie conditiile generale de utilizare a site-ului FISTIC si
          conditiile in care pot fi solicitate servicii pentru evenimente, targuri sau
          colaborari comerciale. Datele finale ale operatorului economic trebuie completate
          dupa validarea formei juridice si a informatiilor fiscale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">2. Solicitari si rezervari</h2>
        <p className="mt-3">
          Trimiterea unei solicitari prin telefon, email sau WhatsApp nu reprezinta automat
          confirmarea unei rezervari. Confirmarea colaborarii se face doar dupa validarea
          disponibilitatii, a intervalului, a locatiei si a conditiilor logistice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">3. Preturi si disponibilitate</h2>
        <p className="mt-3">
          Preturile, meniurile si disponibilitatea pot varia in functie de sezon, locatie,
          durata evenimentului si necesarul operational. Informatiile prezentate pe site au
          caracter orientativ pana la emiterea unei confirmari comerciale finale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">4. Proprietate intelectuala</h2>
        <p className="mt-3">
          Textele, imaginile, identitatea vizuala si elementele grafice publicate pe acest site
          apartin FISTIC sau sunt utilizate cu drept de folosinta. Copierea, republicarea sau
          reutilizarea lor fara acord prealabil este interzisa.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#3D2314]">5. Limitarea raspunderii</h2>
        <p className="mt-3">
          FISTIC depune eforturi rezonabile pentru actualizarea informatiilor publicate, insa nu
          garanteaza absenta tuturor erorilor de redactare sau a modificarilor operative aparute
          dupa publicare. Pentru decizii comerciale, contactul direct ramane sursa finala de
          confirmare.
        </p>
      </section>
    </LegalPageShell>
  );
}
