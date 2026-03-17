import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
  return (
    <div className={`glitch-wrapper inline-block ${className}`} data-text={text}>
      <span className="relative z-10">{text}</span>
    </div>
  );
};
