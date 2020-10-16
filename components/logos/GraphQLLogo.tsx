import React from 'react';
import LogoProps from './logo-props';

function GraphQLLogo({ size, className }: LogoProps) {
  return (
    <img src="/graphql.svg" height={size} width={size} className={className} alt="graphql logo" />
  );
}

export default GraphQLLogo;
