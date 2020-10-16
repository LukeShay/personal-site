import React from 'react';
import LogoProps from './logo-props';

function TypeScriptLogo({ size, className }: LogoProps) {
  return (
    <img
      src="/typescript.svg"
      height={size}
      width={size}
      className={className}
      alt="typescript logo"
    />
  );
}

export default TypeScriptLogo;
