import React from 'react';
import Button from '../ui/Button';
// Assumindo que você tem uma imagem de fundo para o hero em src/assets/images/hero-background.jpg
import heroBackground from '../../assets/images/hero-background.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay para escurecer a imagem e melhorar a leitura do texto */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-white-pure max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-4 animate-fade-in-down">
          Realce Seu Olhar: Extensões de Cílios que Transformam e Cursos que Capacitam
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-in delay-500">
          Descubra a arte de realçar a beleza natural dos seus cílios e invista na sua carreira com nossos cursos de ponta.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 opacity-0 animate-fade-in delay-1000">
          <Button variant="primary" onClick={() => window.location.href='#services'}>
            Ver Serviços
          </Button>
          <Button variant="secondary" onClick={() => window.location.href='#courses'}>
            Conhecer Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;