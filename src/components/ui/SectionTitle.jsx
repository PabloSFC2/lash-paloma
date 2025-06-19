import React from 'react';

const SectionTitle = ({ children, className }) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-sans font-bold text-gray-text text-center mb-12 ${className || ''}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;