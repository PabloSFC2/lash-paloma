import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

import volumeBrasileiroImg from '../../assets/images/volume-brasileiro.jpg';
import fioAFioImg from '../../assets/images/fio-a-fio.jpg';
import volumeLomaImg from '../../assets/images/volumeLoma.jpg';
import volumeEgipcioImg from '../../assets/images/volumeEgipcio.jpg';

const services = [
  {
    name: 'Volume Brasileiro',
    description: 'Técnica exclusiva que combina volume e naturalidade, criando um efeito de cílios mais encorpados e curvados, ideal para um olhar marcante e sofisticado.',
    image: volumeBrasileiroImg
  },
  {
    name: 'Volume Loma',
    description: 'Técnica exclusiva, criando um efeito de volume personalizado e sofisticado, unindo leveza a um mapping estratégico para realçar o olhar de forma única e marcante.',
    image: volumeLomaImg
  },
  {
    name: 'Fio a Fio',
    description: 'Técnica clássica e versátil de aplicação fio a fio, para um resultado sutil e elegante. Realça o olhar com volume na medida certa e beleza natural.',
    image: fioAFioImg
  },
  {
    name: 'Volume Egipcío',
    description: 'Técnica avançada com leques densos e cheios, para um efeito de volume máximo e glamour. Proporciona um olhar exuberante e impactante.',
    image: volumeEgipcioImg
  },
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-16 bg-nude-light rounded-lg shadow-inner">
      <SectionTitle>Nossos Serviços</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white-pure rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-golden-dark mb-3">{service.name}</h3>
              <p className="text-gray-text text-base mb-4">{service.description}</p>
              <Button onClick={() => window.location.href='#contact'} className="w-full">
                Agendar Agora
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;