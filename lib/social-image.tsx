import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

/* eslint-disable @next/next/no-img-element */

const colors = {
  pistachio: '#93C572',
  pistachioSoft: '#A9C281',
  cream: '#FAF0E6',
  creamSoft: '#FDF6E3',
  chocolate: '#3D2314',
  chocolateSoft: '#6B4A33',
  raspberry: '#E04066',
};

const size = {
  width: 1200,
  height: 630,
};

async function loadBase64Asset(relativePath: string) {
  const file = await readFile(join(process.cwd(), relativePath), 'base64');
  return `data:image/png;base64,${file}`;
}

export async function generateSocialImage(kind: 'og' | 'twitter') {
  const logoSrc = await loadBase64Asset('assets/fistic-logo.png');
  const productSrc = await loadBase64Asset('assets/clatite_cu_fistic.png');
  const accentSrc = await loadBase64Asset('assets/gogosi-cu-ciocolata-si-fructe.png');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.creamSoft} 62%, #fff7ef 100%)`,
          color: colors.chocolate,
          fontFamily: 'Avenir Next, Segoe UI, Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 14% 18%, rgba(169,194,129,0.35), transparent 28%), radial-gradient(circle at 88% 18%, rgba(224,64,102,0.18), transparent 22%), radial-gradient(circle at 78% 86%, rgba(147,197,114,0.18), transparent 24%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '54px 56px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '58%',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  width: 'fit-content',
                  padding: '12px 20px',
                  borderRadius: 999,
                  background: 'rgba(147,197,114,0.18)',
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Craiova
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <img
                  src={logoSrc}
                  alt="FISTIC"
                  width="104"
                  height="104"
                  style={{ borderRadius: 28 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: 74,
                      fontWeight: 900,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    FISTIC
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: 38,
                      color: colors.pistachio,
                      fontStyle: 'italic',
                      lineHeight: 1,
                    }}
                  >
                    clatite & mini-gogosi
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    fontSize: kind === 'twitter' ? 48 : 52,
                    lineHeight: 1.08,
                    fontWeight: 800,
                    maxWidth: 560,
                  }}
                >
                  Zambete glazurate si clatite fermecate.
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontSize: 28,
                    lineHeight: 1.45,
                    color: colors.chocolateSoft,
                    maxWidth: 560,
                  }}
                >
                  Rulota dulce pentru Targul de Paste Craiova, evenimente private si colaborari corporate.
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              {['3 aprilie - 3 mai', 'Targul de Paste Craiova', 'Rezervari & colaborari'].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      padding: '12px 18px',
                      borderRadius: 999,
                      background: 'rgba(61,35,20,0.08)',
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '36%',
              height: '100%',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: 360,
                height: 360,
                top: 16,
                right: 18,
                borderRadius: 44,
                transform: 'rotate(7deg)',
                background: `linear-gradient(145deg, ${colors.pistachioSoft}, #d7e8bd)`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 248,
                height: 248,
                bottom: 8,
                left: 0,
                borderRadius: 999,
                overflow: 'hidden',
                border: '12px solid rgba(250,240,230,0.96)',
                boxShadow: '0 20px 60px rgba(61,35,20,0.14)',
              }}
            >
              <img
                src={accentSrc}
                alt=""
                width="248"
                height="248"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                width: 402,
                height: 486,
                borderRadius: 42,
                overflow: 'hidden',
                border: '14px solid rgba(253,246,227,0.96)',
                boxShadow: '0 26px 70px rgba(61,35,20,0.18)',
                background: '#fff9f1',
              }}
            >
              <img
                src={productSrc}
                alt="Clatita cu fistic"
                width="402"
                height="486"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

export { size };
