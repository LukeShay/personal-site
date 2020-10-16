import React from 'react';
import LogoProps from './logo-props';

function ReactLogo({ size, className }: LogoProps) {
  return <img src="/react.svg" height={size} width={size} className={className} alt="react logo" />;
}

export default ReactLogo;
