import React from 'react';

const MindMapPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1624] text-white py-10 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Mapa Mental: capitulo 2</h1>
        
        <div className="flex justify-center">
          <div className="bg-yellow-500 p-4 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold">Desigualdad Mundial y Teorías Económicas</h2>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex flex-col space-y-4">
            <div className="bg-red-500 p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">1. Hipótesis Geográficas</h3>
              <ul className="list-inside">
                <li>Diferencias Geográficas, concentración de pobreza en países entre los trópicos de Cáncer y Capricornio.</li>
                <li>Teoría de Montesquieu, climas tropicales asociados con holgazanería y falta de innovación.</li>
                <li>Críticas a la Hipótesis, no explica variaciones dentro de continentes (ej. Inglaterra vs. Moldavia).</li>
              </ul>
            </div>

            <div className="bg-green-500 p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">2. Desigualdad Económica</h3>
              <ul className=" list-inside">
                <li>Distribución de la Renta, la mayoría de los países más pobres están en África subsahariana.</li>
                <li>Cambio a lo Largo del Tiempo, pocos cambios en la lista de países ricos y pobres en los últimos 50-150 años.</li>
              </ul>
            </div>

            <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">3. Ejemplos Históricos</h3>
              <ul className=" list-inside">
                <li>Civilizaciones Precolombinas, aztecas e Incas más prósperos que muchas civilizaciones en zonas templadas.</li>
                <li>Colonización, impacto de la colonización en la riqueza de América del Norte y del Sur.</li>
              </ul>
            </div>

            {/* Factores Adicionales */}
            <div className="bg-purple-500 p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">4. Factores Adicionales</h3>
              <ul className=" list-inside">
                <li>Enfermedades tropicales, efecto negativo en la salud y productividad.</li>
                <li>Agricultura, limitaciones del suelo tropical para el desarrollo agrícola.</li>
              </ul>
            </div>

          
          </div>
        </div>


      </div>
    </div>
  );
};

export default MindMapPage;
