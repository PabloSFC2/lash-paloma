import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white-pure shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-golden-dark font-serif">
          Paloma Correa
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#hero" className="text-gray-text hover:text-golden-dark font-semibold transition-colors duration-300">Início</a>
          <a href="#about" className="text-gray-text hover:text-golden-dark font-semibold transition-colors duration-300">Sobre</a>
          <a href="#services" className="text-gray-text hover:text-golden-dark font-semibold transition-colors duration-300">Serviços</a>
          <a href="#courses" className="text-gray-text hover:text-golden-dark font-semibold transition-colors duration-300">Cursos</a>
          <a href="#testimonials" className="text-gray-text hover:text-golden-dark font-semibold transition-colors duration-300">Depoimentos</a>
          <a href="#contact" className="text-gray-text hover:text-golden-dark font-semibold transition-colors duration-300">Contato</a>
          <Button onClick={() => window.open('https://wa.me/5511989927677', '_blank')}>Agendar</Button>
        </div>

        {/* Botão Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-text focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white-pure py-4 shadow-lg">
          <a href="#hero" onClick={toggleMenu} className="block px-6 py-2 text-gray-text hover:bg-nude-light hover:text-golden-dark font-semibold">Início</a>
          <a href="#about" onClick={toggleMenu} className="block px-6 py-2 text-gray-text hover:bg-nude-light hover:text-golden-dark font-semibold">Sobre</a>
          <a href="#services" onClick={toggleMenu} className="block px-6 py-2 text-gray-text hover:bg-nude-light hover:text-golden-dark font-semibold">Serviços</a>
          <a href="#courses" onClick={toggleMenu} className="block px-6 py-2 text-gray-text hover:bg-nude-light hover:text-golden-dark font-semibold">Cursos</a>
          <a href="#testimonials" onClick={toggleMenu} className="block px-6 py-2 text-gray-text hover:bg-nude-light hover:text-golden-dark font-semibold">Depoimentos</a>
          <a href="#contact" onClick={toggleMenu} className="block px-6 py-2 text-gray-text hover:bg-nude-light hover:text-golden-dark font-semibold">Contato</a>
          <div className="px-6 py-2">
            <Button onClick={() => { window.open('https://wa.me/5511989927677', '_blank'); toggleMenu(); }} className="w-full">Agendar</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;