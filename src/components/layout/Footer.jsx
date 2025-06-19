import React from 'react';
// Importe ícones de redes sociais SVG ou de uma biblioteca como Font Awesome
// Exemplo: import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white-pure py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} Paloma Correa. Todos os direitos reservados.</p>
          <p className="text-sm">Desenvolvido com <span className="text-red-500">&hearts;</span></p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          {/* Substitua por seus links e ícones reais */}
          <a href="https://www.instagram.com/[SEU_INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="text-white-pure hover:text-golden-light transition-colors duration-300">
            {/* Exemplo de ícone SVG (substitua pelo seu) */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C8.686 2 6 4.686 6 8v8c0 3.314 2.686 6 6 6s6-2.686 6-6V8c0-3.314-2.686-6-6-6zm0 2a4 4 0 100 8 4 4 0 000-8zM8 12a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd"></path></svg>
            {/* Ou use um componente de ícone, ex: <FaInstagram size={24} /> */}
          </a>
          <a href="https://www.facebook.com/[SEU_FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-white-pure hover:text-golden-light transition-colors duration-300">
            {/* <FaFacebook size={24} /> */}
          </a>
          <a href="https://wa.me/[SEU_NUMERO_WHATSAPP]" target="_blank" rel="noopener noreferrer" className="text-white-pure hover:text-golden-light transition-colors duration-300">
            {/* <FaWhatsapp size={24} /> */}
          </a>
        </div>
        <div className="text-sm">
          <p>Email: seu.email@example.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;