import React from 'react';

const Button = ({ onClick, children, className = '', variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} z-pwa-dialog-button z-pwa-dialog-button-${variant}`} 
    >
      {children}
    </button>
  );
};

export default Button;
