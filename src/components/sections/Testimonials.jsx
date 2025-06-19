import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: 'Ana Carolina',
    role: 'Cliente',
    quote: 'As extensões de cílios da [Nome da Lash Designer] são simplesmente perfeitas! O trabalho é super delicado e durou muito. Recomendo de olhos fechados!',
    avatar: 'https://via.placeholder.com/80?text=AC' // Substitua por avatares reais
  },
  {
    name: 'Juliana Silva',
    role: 'Aluna (Curso Clássico)',
    quote: 'O curso superou minhas expectativas! A [Nome da Lash Designer] é uma excelente professora, muito atenciosa e me ensinou tudo o que eu precisava para começar.',
    avatar: 'https://via.placeholder.com/80?text=JS'
  },
  {
    name: 'Mariana Santos',
    role: 'Cliente',
    quote: 'Atendimento impecável e cílios maravilhosos! Saio sempre me sentindo mais linda e confiante. É visível o cuidado e profissionalismo.',
    avatar: 'https://via.placeholder.com/80?text=MS'
  },
  {
    name: 'Fernanda Lima',
    role: 'Aluna (Volume Russo)',
    quote: 'Já fiz outros cursos, mas a didática da [Nome da Lash Designer] é incomparável. Aprendi técnicas que me fizeram evoluir muito como profissional.',
    avatar: 'https://via.placeholder.com/80?text=FL'
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