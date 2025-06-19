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
    description: 'Técnica que aplica um fio sintético em cada cílio natural, proporcionando um olhar naturalmente volumoso e alongado.',
    image: volumeBrasileiroImg
  },
  {
    name: 'Volume Loma',
    description: 'Criação de leques de fios ultrafinos aplicados em cada cílio natural, para um volume intenso e dramático.',
    image: volumeLomaImg
  },
  {
    name: 'Fio a Fio',
    description: 'Combinação das técnicas clássica e volume russo, ideal para quem busca um volume intermediário e um olhar marcante.',
    image: fioAFioImg
  },
  {
    name: 'Volume Egipcío',
    description: 'Técnica avançada com leques maiores e mais cheios, para um efeito de volume máximo e glamour.',
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