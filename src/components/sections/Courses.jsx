import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

import cursoImg from '../../assets/images/Curso.jpg';
import cursoImg2 from '../../assets/images/curso2.jpg';
import cursoImg3 from '../../assets/images/curso3.jpg';

const courses = [
  {
    name: 'Curso Extensão de Cílios Clássicos',
    type: 'Presencial e Online',
    description: 'Domine a técnica fundamental de extensão de cílios, do básico ao avançado. Inclui materiais, certificação e suporte.',
    features: ['Teoria e Prática', 'Saúde Ocular', 'Mapeamento', 'Remoção', 'Marketing'],
    image: cursoImg
  },
  {
    name: 'Curso Volume Russo e Mega Volume',
    type: 'Presencial e Online',
    description: 'Aprenda a criar leques perfeitos e domine as técnicas de volume para looks dramáticos e cheios.',
    features: ['Criação de Leques', 'Aplicação Avançada', 'Manutenção', 'Otimização de Tempo'],
    image: cursoImg2
  },
  {
    name: 'Mentoria Individual Personalizada',
    type: 'Online',
    description: 'Sessões de mentoria para lash designers que buscam aprimoramento e solução de desafios específicos.',
    features: ['Sessões 1-1', 'Análise de Casos', 'Plano de Ação', 'Dúvidas Técnicas'],
    image: cursoImg3
  },
];

const Courses = () => {
  return (
    <section id="courses" className="container mx-auto px-6 py-16">
      <SectionTitle>Nossos Cursos de Capacitação</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white-pure rounded-lg shadow-lg overflow-hidden border border-nude-dark transform hover:scale-105 transition-transform duration-300">
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-golden-dark mb-2">{course.name}</h3>
              <p className="text-sm text-gray-text mb-3 italic">{course.type}</p>
              <p className="text-gray-text text-base mb-4">{course.description}</p>
              <ul className="list-disc list-inside text-gray-text mb-6">
                {course.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button onClick={() => window.location.href='#contact'} className="w-full">
                Saiba Mais / Inscreva-se
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;