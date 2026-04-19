import type { CSSProperties } from 'react';

import ShinyText, { type ShinyTextProps } from '@/components/ShinyText';

export interface ShinyScriptTextProps extends ShinyTextProps {
  scriptText?: string;
  containerClassName?: string;
  scriptClassName?: string;
  scriptColor?: string;
  scriptFontFamily?: string;
  scriptStyle?: CSSProperties;
}

const defaultScriptFontFamily = "'Snell Roundhand', 'Brush Script MT', 'Segoe Script', cursive";

export default function ShinyScriptText({
  text,
  containerClassName = '',
  scriptText = text.toLowerCase(),
  scriptClassName = 'absolute -bottom-6 left-10 text-5xl sm:text-6xl',
  scriptColor = '#93C572',
  scriptFontFamily = defaultScriptFontFamily,
  scriptStyle,
  ...shinyTextProps
}: ShinyScriptTextProps) {
  return (
    <div className={`relative inline-block w-fit ${containerClassName}`.trim()}>
      <ShinyText text={text} {...shinyTextProps} />
      <span
        className={scriptClassName}
        style={{
          color: scriptColor,
          transform: 'rotate(-7deg)',
          fontFamily: scriptFontFamily,
          ...scriptStyle,
        }}
      >
        {scriptText}
      </span>
    </div>
  );
}
