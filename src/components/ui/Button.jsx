import React from 'react';

const Button = ({ children, onClick, className, type = 'button', variant = 'primary' }) => {
  const baseClasses = "py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out";
  let variantClasses = "";

  switch (variant) {
    case 'primary':
      variantClasses = "bg-golden-dark text-white-pure hover:bg-golden-light shadow-lg";
      break;
    case 'secondary':
      variantClasses = "bg-transparent border-2 border-golden-dark text-golden-dark hover:bg-golden-light hover:text-white-pure";
      break;
    case 'outline':
      variantClasses = "border border-nude-dark text-nude-dark hover:bg-nude-dark hover:text-white-pure";
      break;
    default:
      variantClasses = "bg-golden-dark text-white-pure hover:bg-golden-light";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;