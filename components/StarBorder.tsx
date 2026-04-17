import React from 'react';

const starBorderKeyframes = `
  @keyframes star-border-bottom {
    0% { transform: translate3d(0%, 0, 0); opacity: 1; }
    100% { transform: translate3d(-100%, 0, 0); opacity: 0; }
  }

  @keyframes star-border-top {
    0% { transform: translate3d(0%, 0, 0); opacity: 1; }
    100% { transform: translate3d(100%, 0, 0); opacity: 0; }
  }
`;

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  innerClassName?: string;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  innerClassName = '',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';
  const { style, ...componentProps } = rest;

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...componentProps}
      style={{
        padding: `${thickness}px 0`,
        ...style,
      }}
    >
      <style>{starBorderKeyframes}</style>
      <div
        className="absolute bottom-[-14px] right-[-230%] z-0 h-[58%] w-[320%] rounded-full opacity-100"
        style={{
          background: `radial-gradient(circle, ${color} 0%, ${color} 10%, transparent 24%)`,
          filter: 'blur(1px)',
          animationDuration: speed,
          animationName: 'star-border-bottom',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
        }}
      />
      <div
        className="absolute left-[-230%] top-[-14px] z-0 h-[58%] w-[320%] rounded-full opacity-100"
        style={{
          background: `radial-gradient(circle, ${color} 0%, ${color} 10%, transparent 24%)`,
          filter: 'blur(1px)',
          animationDuration: speed,
          animationName: 'star-border-top',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
        }}
      />
      <div
        className={`relative z-1 rounded-[20px] border px-[26px] py-[16px] text-center text-[16px] ${innerClassName}`}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }
