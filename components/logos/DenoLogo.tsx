import React from 'react';
import LogoProps from './logo-props';

function DenoLogo({ size, className }: LogoProps) {
  return <img src="/deno.svg" height={size} width={size} className={className} alt="deno logo" />;
}

export default DenoLogo;
