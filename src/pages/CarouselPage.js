import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importar imágenes
import slide1 from './1.png';
import slide2 from './2.png';
import slide3 from './3.png';
import slide4 from './4.png';
import slide5 from './5.png';
import slide6 from './6.png';

const CarouselPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1624] text-white py-10 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Capitulo 13, ¿Por qué fracasan los paises hoy en día?</h1>
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img src={slide1} alt="Slide 1" />
           
          </div>
          <div>
            <img src={slide2} alt="Slide 2" />
            
          </div>
          <div>
            <img src={slide3} alt="Slide 3" />
            
          </div>
          <div>
            <img src={slide4} alt="Slide 4" />

          </div>
          <div>
            <img src={slide5} alt="Slide 5" />
           
          </div>
          <div>
            <img src={slide6} alt="Slide 6" />
            
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
