import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import professionalPhoto from '../../assets/images/professional-photo.jpg'; // Certifique-se que esta imagem existe

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <SectionTitle>Sobre Mim</SectionTitle>
      
      {/* Container principal para alinhar foto e texto - gap reduzido e padding ajustado */}
      {/* Alterado: gap-12 para gap-8, e padding do card p-8 para p-6/p-8 responsivamente */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-8 bg-white-pure p-6 md:p-8 rounded-lg shadow-xl border border-nude-light">
        
        {/* Bloco da Imagem - Visual limpo e profissional */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg border border-nude-dark transform hover:scale-102 transition-transform duration-300">
            <img
              src={professionalPhoto}
              alt="Foto da profissional"
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Bloco do Texto - Alinhamento e tipografia aprimorados */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-xl leading-relaxed font-sans text-gray-text mb-6">
            Olá! Sou <span className="font-bold text-golden-dark">Paloma Correa</span>, uma apaixonada por realçar olhares e elevar a autoestima de mulheres. Minha jornada no universo da extensão de cílios começou em <span className="font-bold text-golden-dark">2022</span>, e desde então, dedico-me a aprimorar minhas técnicas e oferecer o que há de melhor no mercado.
          </p>
          <p className="text-lg leading-relaxed text-gray-text mb-6">
            Com anos de experiência e certificações em diversas técnicas, como Cílios Clássicos, Volume Russo e Megavolume, meu objetivo é proporcionar resultados impecáveis e duradouros, sempre priorizando a saúde e a integridade dos seus cílios naturais.
          </p>
          <p className="text-lg leading-relaxed text-gray-text">
            Além dos serviços, acredito no poder da educação. Por isso, também me dedico a capacitar novas profissionais através de cursos completos, presenciais e online, compartilhando todo o meu conhecimento para que você também possa brilhar neste mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;