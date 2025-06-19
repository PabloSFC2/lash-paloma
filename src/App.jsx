import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Importe suas seções aqui
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Courses from './components/sections/Courses';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

// Importe o ícone do WhatsApp do react-icons
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const whatsappNumber = '5511989927677'; // Defina o número do WhatsApp aqui também, se ainda não estiver
  const whatsappMessage = 'Olá! Gostaria de agendar um serviço/saber mais sobre os cursos.';

  return (
    <div className="min-h-screen bg-white-pure text-gray-text font-sans flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Services />
        <Courses />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Botão Flutuante de WhatsApp usando FaWhatsapp do react-icons */}
      <a
        href={`https://wa.me/<span class="math-inline">\{whatsappNumber\}?text\=</span>{encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center" // Adicionado flex para centralizar o ícone
      >
        {/* Substituído <img> por FaWhatsapp */}
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;