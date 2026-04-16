'use client';

import Image, { type StaticImageData } from 'next/image';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { Skeleton } from '@/components/ui/skeleton';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = useCallback(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    return values[queries.findIndex(q => window.matchMedia(q).matches)] ?? defaultValue;
  }, [defaultValue, queries, values]);

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handler = () => setValue(get);
    const mediaQueries = queries.map(q => window.matchMedia(q));

    mediaQueries.forEach(mq => mq.addEventListener('change', handler));
    return () => mediaQueries.forEach(mq => mq.removeEventListener('change', handler));
  }, [get, queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

interface Item {
  id: string;
  img: string | StaticImageData;
  url?: string;
  height: number;
  title?: string;
  subtitle?: string;
  imageSize?: string;
  imageBackground?: string;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [loadedItems, setLoadedItems] = useState<Record<string, boolean>>({});

  const getInitialPosition = useCallback((item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  }, [animateFrom, containerRef]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);
  const containerHeight = useMemo(() => {
    if (!grid.length) {
      return 0;
    }

    return Math.max(...grid.map(item => item.y + item.h));
  }, [grid]);

  useLayoutEffect(() => {
    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [blurToFocus, duration, ease, getInitialPosition, grid, stagger]);

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay') as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay') as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  const handleItemClick = (url?: string) => {
    if (!url) {
      return;
    }

    if (url.startsWith('#')) {
      document.querySelector(url)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.open(url, '_blank', 'noopener');
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ minHeight: containerHeight }}>
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className={`absolute box-content ${item.url ? 'cursor-pointer' : ''}`}
          style={{ willChange: 'transform, width, height, opacity' }}
          onClick={() => handleItemClick(item.url)}
          onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
            style={{
              backgroundColor: item.imageBackground ?? '#fff',
            }}
          >
            <Skeleton
              className="absolute inset-0 rounded-[10px]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(253,246,227,0.92) 0%, rgba(169,194,129,0.24) 100%)',
              }}
            />
            <Image
              src={item.img}
              alt={item.title ?? 'FISTIC dessert'}
              fill
              sizes="(min-width: 1500px) 18vw, (min-width: 1000px) 22vw, (min-width: 600px) 30vw, (min-width: 400px) 45vw, 100vw"
              className={`rounded-[10px] transition-opacity duration-500 ${
                loadedItems[item.id] ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                objectFit: item.imageSize === 'contain' ? 'contain' : 'cover',
              }}
              onLoad={() =>
                setLoadedItems(current =>
                  current[item.id] ? current : { ...current, [item.id]: true }
                )
              }
            />
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
            {(item.title || item.subtitle) && (
              <div className="absolute inset-x-0 bottom-0 rounded-b-[10px] bg-gradient-to-t from-[#3D2314]/95 via-[#3D2314]/78 to-transparent p-4 text-left normal-case">
                {item.title && (
                  <p className="text-sm font-semibold tracking-[0.02em] text-[#FDF6E3]">
                    {item.title}
                  </p>
                )}
                {item.subtitle && (
                  <p className="mt-1 text-xs leading-5 text-[#FDF6E3]/80">
                    {item.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
