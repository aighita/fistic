'use client';

import { useEffect, useState } from 'react';

import TiltedCard from '@/components/TiltedCard';

type CarouselItem = {
  src: string;
  alt: string;
  title: string;
  badge?: string;
};

interface HeroTiltedCarouselProps {
  items: CarouselItem[];
  intervalMs?: number;
}

export default function HeroTiltedCarousel({
  items,
  intervalMs = 4200,
}: HeroTiltedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, items.length]);

  const activeItem = items[activeIndex];

  return (
    <div className="w-full max-w-[640px]">
      <TiltedCard
        imageSrc={activeItem.src}
        altText={activeItem.alt}
        captionText={activeItem.title}
        containerHeight="clamp(360px, 42vw, 560px)"
        imageHeight="clamp(360px, 42vw, 560px)"
        imageWidth="100%"
        containerWidth="100%"
        rotateAmplitude={10}
        scaleOnHover={1.03}
        showMobileWarning={false}
        showTooltip={false}
        imageClassName="object-cover"
        displayOverlayContent
        overlayContent={
          <div className="flex h-full flex-col justify-between p-4 sm:p-6">
            {activeItem.badge ? (
              <div className="inline-flex w-fit rounded-full bg-[#FAF0E6]/92 px-4 py-2 text-sm font-semibold text-[#3D2314] shadow-lg">
                {activeItem.badge}
              </div>
            ) : (
              <span />
            )}
            <div className="inline-flex w-fit rounded-full bg-[#3D2314]/90 px-4 py-2 text-sm font-semibold text-[#FDF6E3] shadow-lg">
              {activeItem.title}
            </div>
          </div>
        }
      />

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B4A33]">
          Galerie
        </p>
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Afiseaza ${item.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-10 bg-[#E04066]' : 'w-2.5 bg-[#3D2314]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
