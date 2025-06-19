import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Assumindo que você tem uma imagem para o curso Power Lash
import powerLashCourseImg from '../../assets/images/power-lash-course.jpg'; // Substitua pelo nome da sua imagem
//import defaultCourseImg from 'https://via.placeholder.com/400x300?text=Curso+Power+Lash'; // Imagem placeholder caso não tenha uma específica ainda

const courses = [
  {
    name: 'Curso Power Lash - Iniciante VIP',
    type: 'Presencial (Suporte Pós-Curso)',
    description: 'Transforme sua realidade e torne-se uma Lash Designer renomada! Aprenda o método exclusivo para dominar as técnicas mais procuradas e otimizar seu tempo, garantindo liberdade financeira e o reconhecimento que você merece no mercado da beleza.',
    content: [
      'Biossegurança e Higienização',
      'Mapeamento e Visagismo',
      'Doenças Oculares',
      'Tamanho, Espessura e Curvaturas',
      'Acoplagem e Retenção',
      'Tricologia e Isolamento',
      'Trabalho em Camadas e Remoção',
      'pH do Fio e da Pele',
      'Volumes Tendência'
    ],
    techniques: [
      'Fio a Fio',
      'Mega Brasileiro',
      'Volume Brasileiro',
      'Volume Loma',
      'Volume Egípcio',
      'Lash Designer',
      'Efeito Fox',
      'Efeito Sereia'
    ],
    included: [
      '2 Dias de Curso (Teórico e Prático em Modelo)',
      'Material Didático Completo (Apostila)',
      'Certificado de Conclusão',
      'Suporte Pós-Curso Exclusivo',
      'Coffee-Break'
    ],
    image: powerLashCourseImg // Use powerLashCourseImg se tiver a imagem
  },
];

const Courses = () => {
  const whatsappNumber = '5511989927677'; // SUBSTITUA PELO SEU NÚMERO DE WHATSAPP COMPLETO
  const whatsappMessageCourse = 'Olá! Tenho interesse no Curso Power Lash e gostaria de saber mais detalhes.';

  return (
    <section id="courses" className="container mx-auto px-6 py-16">
      <SectionTitle>Nosso Curso de Capacitação</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto"> {/* Ajustado para exibir apenas 1 coluna centralizada */}
        {courses.map((course, index) => (
          <div key={index} className="bg-white-pure rounded-lg shadow-lg overflow-hidden border border-nude-dark transform hover:scale-102 transition-transform duration-300">
            <img src={course.image} alt={course.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-golden-dark mb-4 text-center">{course.name}</h3>
              <p className="text-base text-gray-text text-center mb-6 italic">{course.type}</p>
              <p className="text-gray-text text-lg mb-8 text-center">{course.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Coluna de Conteúdo */}
                <div>
                  <h4 className="text-xl font-bold text-golden-dark mb-3 border-b border-nude-dark pb-2">Conteúdo Programático:</h4>
                  <ul className="list-disc list-inside text-gray-text text-base space-y-2">
                    {course.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Coluna de Técnicas e Inclusos */}
                <div>
                  <h4 className="text-xl font-bold text-golden-dark mb-3 border-b border-nude-dark pb-2">Técnicas Exclusivas:</h4>
                  <ul className="list-disc list-inside text-gray-text text-base space-y-2 mb-6">
                    {course.techniques.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-bold text-golden-dark mb-3 border-b border-nude-dark pb-2">O que está incluso:</h4>
                  <ul className="list-disc list-inside text-gray-text text-base space-y-2">
                    {course.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessageCourse)}`, '_blank')} className="w-full text-lg mt-auto">
                Transforme Sua Carreira - Fale Conosco no WhatsApp!
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;