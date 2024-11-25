import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom'; 

const GrowTokenFeatures = () => {
  const navigate = useNavigate(); 

  const handleRedirect = (path) => {
    navigate(path); 
  };

  return (
    <div className="min-h-screen bg-[#0F1624] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">
            ¿Por qué<span className="text-[#E1F340]"> fracasan</span> los paises?
          </h1>
          <p className="mt-4 text-lg text-gray-300">
          Los orígenes del poder, la prosperidad y la pobreza es un libro publicado en 2012 por los economistas Daron Acemoglu          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
            onClick={() => handleRedirect('/interactive-collage-page')}
            className="p-6 bg-[#1C2539] rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400">Introduccion</h3>
            <h2 className="text-2xl font-bold mt-2"></h2>
            <p className="mt-4 text-gray-400">
            Acemoglu y Robinson sostienen que los países crecen económicamente a medida que sus
instituciones son más inclusivas y democráticas de forma que la riqueza está mejor repartida
que si fuese un régimen exclusivo y explotador que establece instituciones destinadas a
exprimir a los ciudadanos en función de los intereses de los gobernantes y sus amigos.
            </p>
          </div>

          <div
            onClick={() => handleRedirect('/text-page')}
            className="p-6 bg-[#1C2539] rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400">Capitulo 1</h3>
            <h2 className="text-2xl font-bold mt-2">Tan cerca y tan lejos</h2>
            <p className="mt-4 text-gray-400">
            El capítulo analiza las marcadas diferencias económicas y sociales entre Nogales, Arizona, y Nogales, Sonora, a pesar de su proximidad geográfica            </p>
          </div>

          <div
            onClick={() => handleRedirect('/carousel-page')}
            className="p-6 bg-[#1C2539] rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-blue-400">Capitulo 13</h3>
            <h2 className="text-2xl font-bold mt-2">¿Por que fracasan los paises hoy en día?</h2>
            <p className="mt-4 text-gray-400">
            Se atribuye a la existencia de instituciones extractivas que concentran el poder y la riqueza en manos de una élite, perpetuando la pobreza y limitando el crecimiento económico            </p>
          </div>

          <div
            onClick={() => handleRedirect('/mind-map-page')}
            className="p-6 bg-[#1C2539] rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400">Capitulo 2</h3>
            <h2 className="text-2xl font-bold mt-2">Teorías que no funcionan</h2>
            <p className="mt-4 text-gray-400">
            Explora las teorías sobre la desigualdad económica global, centrándose en la hipótesis geográfica que sugiere que la pobreza se concentra en regiones tropicales debido a factores como el clima y las enfermedades.            </p>
          </div>


          <div
            onClick={() => handleRedirect('/text')}
            className="p-6 bg-[#1C2539] rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400">Capitulo 15</h3>
            <h2 className="text-2xl font-bold mt-2">Claves para comprender la prosperidad y la pobreza</h2>
            <p className="mt-4 text-gray-400">
            El capítulo destaca la ineficacia de la ayuda internacional, la necesidad de soluciones más profundas para problemas de desarrollo y la relevancia de las instituciones en el progreso de las sociedades.
            </p>
          </div>

          <div
            onClick={() => handleRedirect('/text')}
            className="p-6 bg-[#1C2539] rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400">Conclsión</h3>
            <h2 className="text-2xl font-bold mt-2">¿Por qué los paises fracasan?</h2>
            <p className="mt-4 text-gray-400">
            El camino hacia la prosperidad no se encuentra en la simple transferencia de recursos, sino en la creación de un entorno institucional que permita a las sociedades florecer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowTokenFeatures;

