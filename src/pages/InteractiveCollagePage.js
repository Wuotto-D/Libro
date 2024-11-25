import React from 'react';
import image1 from './a.jpeg'; // Asegúrate de usar la ruta correcta
import image2 from './b.jpeg';
import image3 from './c.jpeg';
import image4 from './d.jpeg';
import image5 from './e.jpeg';
import image6 from './f.jpeg';
import image7 from './g.jpeg';
import image8 from './h.jpeg';
import image9 from './i.jpeg';
import image10 from './j.jpeg';
import image11 from './k.jpeg';
import image12 from './m.jpeg';
import image13 from './n.jpeg';
import image14 from './o.jpeg';
import image15 from './p.jpeg';

const images = [
  { src: image1, alt: "Image 1", text: "Tan cerca y sin embargo, tan diferentes" },
  { src: image2, alt: "Image 2", text: "Teorías qué no funcionan" },
  { src: image3, alt: "Image 3", text: "La creación de la prosperidad y la pobreza" },
  { src: image4, alt: "Image 4", text: "Pequeñas diferencias y conductoras críticas: el peso de la historia" },
  { src: image5, alt: "Image 5", text: "He visto el futuro y funciona: el crecimiento bajo instituciones extractivas" },
  { src: image6, alt: "Image 6", text: "El distanciamiento" },
  { src: image7, alt: "Image 7", text: "El punto de inflexión" },
  { src: image8, alt: "Image 8", text: "No en nuestro territorio, obstáculos para el desarrollo" },
  { src: image9, alt: "Image 9", text: "Como revertir el desarrollo" },
  { src: image10, alt: "Image 10", text: "La difusión de prosperidad" },
  { src: image11, alt: "Image 11", text: "El circulo virtuoso" },
  { src: image12, alt: "Image 12", text: "El circulo vicioso" },
  { src: image13, alt: "Image 13", text: "Porque fracasan los países hoy en día" },
  { src: image14, alt: "Image 14", text: "Como romper el molde" },
  { src: image15, alt: "Image 15", text: "Claves para comprender la prosperidad y la pobreza" },
];

const InteractiveCollagePage = () => {
  return (
    <div className="min-h-screen bg-[#0F1624] text-white py-10 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Introducción</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl">{image.text}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCollagePage;
