import React from 'react';
import { CommonProps } from './CommonProps';

function H5({ className, children }: CommonProps) {
  return (
    <div className={`${className} text-l leading-9 font-extrabold text-gray-900`}>{children}</div>
  );
}

export default H5;
