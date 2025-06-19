import React from 'react';
import SectionTitle from '../ui/SectionTitle';

import cliente from '../../assets/images/cliente.jpg';
import cliente2 from '../../assets/images/cliente2.jpg';
import cliente3 from '../../assets/images/cliente3.jpg';
import cliente4 from '../../assets/images/cliente4.jpg';

const testimonials = [
  {
    name: 'Ana Carolina',
    role: 'Cliente',
    quote: 'As extensões de cílios da Paloma são simplesmente perfeitas! O trabalho é super delicado e durou muito. Recomendo de olhos fechados!',
    avatar: cliente // Substitua por avatares reais
  },
  {
    name: 'Juliana Silva',
    role: 'Aluna',
    quote: 'O curso superou minhas expectativas! A Paloma é uma excelente professora, muito atenciosa e me ensinou tudo o que eu precisava para começar.',
    avatar: cliente2
  },
  {
    name: 'Mariana Santos',
    role: 'Cliente',
    quote: 'Atendimento impecável e cílios maravilhosos! Saio sempre me sentindo mais linda e confiante. É visível o cuidado e profissionalismo.',
    avatar: cliente3
  },
  {
    name: 'Fernanda Lima',
    role: 'Aluna',
    quote: 'Já fiz outros cursos, mas a didática da Paloma é incomparável. Aprendi técnicas que me fizeram evoluir muito como profissional.',
    avatar: cliente4
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-16 bg-golden-light bg-opacity-20 rounded-lg shadow-inner">
      <SectionTitle>O Que Dizem Nossas Clientes e Alunas</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white-pure p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-golden-dark" />
            <p className="text-gray-text italic mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-golden-dark">{testimonial.name}</p>
            <p className="text-sm text-gray-text">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;