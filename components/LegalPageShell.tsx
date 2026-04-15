import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const colors = {
  cream: '#FAF0E6',
  creamSoft: '#FDF6E3',
  chocolate: '#3D2314',
  chocolateSoft: '#6B4A33',
  pistachio: '#93C572',
};

const displayFont = "'Avenir Next', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

interface LegalPageShellProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export default function LegalPageShell({
  title,
  updatedAt,
  children,
}: LegalPageShellProps) {
  return (
    <main
      className="min-h-screen px-6 py-10 lg:px-10"
      style={{ backgroundColor: colors.cream, color: colors.chocolate }}
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          style={{
            borderColor: 'rgba(61, 35, 20, 0.14)',
            backgroundColor: 'rgba(253, 246, 227, 0.9)',
          }}
        >
          <ArrowLeft className="h-4 w-4" />
          Inapoi la pagina principala
        </Link>

        <div
          className="mt-8 rounded-[32px] border p-6 sm:p-8"
          style={{
            borderColor: 'rgba(61, 35, 20, 0.1)',
            background:
              'linear-gradient(180deg, rgba(253,246,227,0.98) 0%, rgba(255,250,243,0.98) 100%)',
          }}
        >
          <div className="inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]" style={{ backgroundColor: 'rgba(147, 197, 114, 0.14)' }}>
            FISTIC
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl" style={{ fontFamily: displayFont }}>
            {title}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.14em]" style={{ color: colors.chocolateSoft }}>
            Ultima actualizare: {updatedAt}
          </p>
          <div className="mt-8 space-y-8 text-base leading-8" style={{ color: colors.chocolateSoft }}>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
