import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

type MasonryItem = {
  id: string;
  img: string | StaticImageData;
  url?: string;
  height: number;
  title?: string;
  subtitle?: string;
  imageSize?: string;
  imageBackground?: string;
};

type MasonryProps = {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
};

function MasonryCard({
  item,
  index,
  scaleOnHover = true,
  hoverScale = 0.98,
}: {
  item: MasonryItem;
  index: number;
  scaleOnHover?: boolean;
  hoverScale?: number;
}) {
  const imageFit = item.imageSize === 'contain' ? 'contain' : 'cover';
  const aspectRatio = `1 / ${Math.max(item.height / 320, 1)}`;
  const imageProps =
    typeof item.img === 'object' && 'blurDataURL' in item.img
      ? { placeholder: 'blur' as const }
      : {};
  const wrapperClassName = scaleOnHover
    ? 'block transition-transform duration-300 hover:scale-[var(--masonry-hover-scale)]'
    : 'block';
  const wrapperStyle = scaleOnHover
    ? ({ '--masonry-hover-scale': `${hoverScale}` } as React.CSSProperties)
    : undefined;

  const card = (
    <article
      className="group mb-4 break-inside-avoid overflow-hidden rounded-[22px] border border-[#3D2314]/10 bg-white/70 shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
      style={{
        backgroundColor: item.imageBackground ?? 'rgba(255,255,255,0.72)',
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        <Image
          src={item.img}
          alt={item.title ?? 'FISTIC dessert'}
          fill
          sizes="(min-width: 1536px) 17vw, (min-width: 1280px) 21vw, (min-width: 1024px) 28vw, (min-width: 768px) 30vw, (min-width: 640px) 46vw, 100vw"
          className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          style={{ objectFit: imageFit }}
          {...imageProps}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/72 via-[#3D2314]/42 to-transparent" />
        {(item.title || item.subtitle) && (
          <div className="absolute inset-x-0 bottom-0 p-4 text-left normal-case">
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
    </article>
  );

  if (!item.url) {
    return card;
  }

  if (item.url.startsWith('#')) {
    return (
      <a
        href={item.url}
        className={wrapperClassName}
        style={wrapperStyle}
      >
        {card}
      </a>
    );
  }

  if (item.url.startsWith('/')) {
    return (
      <Link
        href={item.url}
        className={wrapperClassName}
        style={wrapperStyle}
      >
        {card}
      </Link>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={wrapperClassName}
      style={wrapperStyle}
    >
      {card}
    </a>
  );
}

export default function Masonry({
  items,
  scaleOnHover,
  hoverScale,
}: MasonryProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
      {items.map((item, index) => (
        <MasonryCard
          key={item.id}
          item={item}
          index={index}
          scaleOnHover={scaleOnHover}
          hoverScale={hoverScale}
        />
      ))}
    </div>
  );
}
