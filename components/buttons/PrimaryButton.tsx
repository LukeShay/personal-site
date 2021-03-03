import React from 'react';
import { ButtonProps } from './ButtonProps';

function PrimaryButton({ className, children, id, type, filled, loading, onClick }: ButtonProps) {
  const updatedClassName = `${className} rounded py-2 px-3 shadow ${
    filled
      ? 'text-cyan-100 hover:text-white bg-cyan-500 border border-cyan-500 hover:bg-cyan-900'
      : 'text-cyan-500 hover:text-cyan-900 bg-transparent border border-cyan-500 hover:border-cyan-900'
  }`;
  return (
    <button
      id={id}
      className={`${updatedClassName} ${loading && 'spinner'}`}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
}

PrimaryButton.defaultProps = {
  className: '',
  id: '',
  type: 'button',
  filled: true,
};

export default PrimaryButton;
