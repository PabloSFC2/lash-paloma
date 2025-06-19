import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Slider from 'react-slick'; // Importe o componente Slider do react-slick

// Importe suas imagens da galeria aqui
// Exemplo:
import trabalho1 from '../../assets/images/trabalho1.jpg';
import trabalho2 from '../../assets/images/trabalho2.jpg';
import trabalho3 from '../../assets/images/trabalho3.jpg';
import trabalho4 from '../../assets/images/trabalho4.jpg';
import trabalho5 from '../../assets/images/trabalho5.jpg';
import trabalho6 from '../../assets/images/trabalho6.jpg';
// Adicione todas as imagens que você quer na galeria seguindo este padrão:
// import NOME_DA_SUA_IMAGEM from '../../assets/images/NOME_DO_ARQUIVO.jpg';


// Crie um array com todas as imagens importadas
// Lembre-se de substituir os 'trabalhoX' pelos NOME_DA_SUA_IMAGEM que você importou
const galleryImages = [
  { id: 1, src: trabalho1, alt: 'Exemplo de Cílios 1' },
  { id: 2, src: trabalho2, alt: 'Exemplo de Cílios 2' },
  { id: 3, src: trabalho3, alt: 'Exemplo de Cílios 3' },
  { id: 4, src: trabalho4, alt: 'Exemplo de Cílios 4' },
  { id: 5, src: trabalho5, alt: 'Exemplo de Cílios 5' },
  { id: 6, src: trabalho6, alt: 'Exemplo de Cílios 6' },
  // Continue adicionando seus objetos de imagem com id, src e alt
  // { id: 7, src: SUA_IMAGEM_7, alt: 'Descrição da Imagem 7' },
];

const Gallery = () => {
  const settings = {
    dots: true, // Mostra os indicadores de "bolinhas" na parte inferior
    infinite: true, // Permite que o carrossel continue infinitamente
    speed: 500, // Velocidade da transição em milissegundos
    slidesToShow: 3, // Quantos slides mostrar por vez (padrão para telas maiores)
    slidesToScroll: 1, // Quantos slides rolar por vez
    autoplay: true, // Desliza automaticamente
    autoplaySpeed: 3000, // Intervalo entre os slides em milissegundos (3 segundos)
    arrows: true, // Mostra as setas de navegação
    responsive: [ // Configurações para diferentes tamanhos de tela
      {
        breakpoint: 1024, // Para telas com largura máxima de 1024px (tablets e alguns laptops)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true // Mantém as setas
        }
      },
      {
        breakpoint: 600, // Para telas com largura máxima de 600px (celulares)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false // Oculta as setas em telas muito pequenas para melhor usabilidade no toque
        }
      }
    ]
  };

  return (
    <section id="gallery" className="container mx-auto px-6 py-16">
      <SectionTitle>Meus Trabalhos</SectionTitle>
      <Slider {...settings}> {/* O componente Slider recebe as configurações */}
        {galleryImages.map(image => (
          <div key={image.id} className="px-2"> {/* Adicionei padding horizontal para espaçamento entre os slides */}
            <div className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover" // Ajustei a altura para um tamanho fixo no carrossel. Você pode ajustar 'h-64' (256px) conforme sua preferência.
                loading="lazy" // Boa prática para otimização de carregamento
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;