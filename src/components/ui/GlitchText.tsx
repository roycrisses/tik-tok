import React from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-[2px] text-tiktok-red opacity-0 group-hover:opacity-70 animate-glitch z-0 mix-blend-screen" aria-hidden="true">
        {text}
      </span>
      <span className="absolute top-0 left-0 -ml-[1px] mt-[1px] text-tiktok-blue opacity-0 group-hover:opacity-70 animate-pulse z-0 mix-blend-screen" aria-hidden="true">
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;