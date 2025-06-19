import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Slider from 'react-slick';

// Importe os ícones para as informações de contato
// Adicione FaFacebook para o ícone do Facebook
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';

// Importe as imagens do seu estúdio aqui
import studioImg1 from '../../assets/images/studio1.jpg'; // Substitua pelos nomes dos seus arquivos
import studioImg2 from '../../assets/images/studio2.jpg';
import studioImg3 from '../../assets/images/studio3.jpg';
// Adicione quantas imagens você tiver do estúdio

// Array de imagens do estúdio para o carrossel
const studioImages = [
  { id: 1, src: studioImg1, alt: 'Ambiente aconchegante do estúdio' },
  { id: 2, src: studioImg2, alt: 'Detalhes da decoração do espaço' },
  { id: 3, src: studioImg3, alt: 'Espaço de atendimento da lash designer' },
  // Adicione mais objetos de imagem conforme necessário
];

const Contact = () => {
  const whatsappNumber = '5511989927677'; // SUBSTITUA PELO SEU NÚMERO DE WHATSAPP COMPLETO (código do país + DDD + número)
  const whatsappMessage = 'Olá! Gostaria de agendar um serviço ou saber mais sobre os cursos.';
  const instagramLink = 'https://www.instagram.com/ciliospaloma_correa/'; // SUBSTITUA PELO SEU LINK DO INSTAGRAM
  const facebookLink = 'https://www.facebook.com/SEU_USUARIO_AQUI/'; // SUBSTITUA PELO SEU LINK DO FACEBOOK (se houver)
  const emailAddress = 'contato@nomedalashdesigner.com.br'; // SUBSTITUA PELO SEU EMAIL
  const fullAddress = 'Rua Mazel, 107 - Parque São George, Cotia, SP - 06708-235'; // SEU ENDEREÇO COMPLETO
  const googleMapsLink = 'https://maps.app.goo.gl/SEU_LINK_AQUI'; // SUBSTITUA PELO SEU LINK DO GOOGLE MAPS
  const phoneNumber = '(11) 98992-7677';

  // Configurações do carrossel para as imagens do estúdio
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: "linear"
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      {/* Parte Superior: Conheça Nosso Espaço com Carrossel */}
      <SectionTitle>Conheça Nosso Espaço</SectionTitle>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
        {/* Texto Persuasivo */}
        <div className="md:w-1/2 text-center md:text-left max-w-lg">
          <p className="text-xl md:text-2xl font-semibold text-gray-text leading-relaxed mb-6">
            Bem-vinda ao nosso santuário de beleza e autoamor, onde a magia acontece e cada detalhe é pensado para você!
          </p>
          <p className="text-lg text-gray-text leading-relaxed mb-8">
            Nosso estúdio foi cuidadosamente projetado para oferecer um ambiente acolhedor, elegante e tranquilo, perfeito para você relaxar enquanto realçamos sua beleza. Experimente o conforto de um espaço dedicado ao seu bem-estar, onde a qualidade e a higiene são prioridades.
          </p>
          <Button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}>
            Agende Sua Visita!
          </Button>
        </div>

        {/* Carrossel de Imagens do Estúdio */}
        <div className="md:w-1/2 w-full max-w-md md:max-w-none">
          <div className="rounded-lg shadow-xl overflow-hidden border border-nude-dark">
            <Slider {...sliderSettings}>
              {studioImages.map(image => (
                <div key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Parte Inferior: Fale Comigo (Estilo Minimalista da Foto) */}
      <div className="max-w-3xl mx-auto py-12 px-6 border-t-2 border-golden-dark"> {/* Borda superior dourada */}
        <h2 className="text-5xl font-bold text-gray-text text-center mb-4">
          FALE COMIGO<span className="text-golden-dark">.</span> {/* Ponto dourado como na imagem */}
        </h2>
        <p className="text-lg text-gray-text text-center mb-8">
          Entre em contato e retornarei assim que possível. Se preferir, fale diretamente pelo WhatsApp.
        </p>

        {/* Informações de Contato Diretas */}
        <div className="text-center text-xl text-gray-text space-y-4 mb-8">
          {/* WhatsApp */}
          <div className="flex items-center justify-center">
            <FaWhatsapp className="text-green-600 text-2xl mr-3" />
            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-text">
              {phoneNumber.replace(/[^0-9]/g, '').replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')} {/* Exemplo de formatação do número */}
            </a>
          </div>

          {/* E-mail */}
          <div className="flex items-center justify-center">
            <FaEnvelope className="text-golden-dark text-2xl mr-3" />
            <a href={`mailto:${emailAddress}`} className="hover:underline text-gray-text break-all">
              {emailAddress}
            </a>
          </div>

          {/* Localização */}
          <div className="flex items-center justify-center text-gray-text">
            <FaMapMarkerAlt className="text-golden-dark text-2xl mr-3" />
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-text">
              {fullAddress.split(',')[0]} - {fullAddress.split(',')[1]}
            </a>
          </div>
          <p className="text-base text-gray-text">
             {fullAddress.split(',')[2]}, {fullAddress.split(',')[3]}
          </p>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center space-x-6 text-gray-text text-4xl">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="hover:text-golden-dark transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-golden-dark transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;