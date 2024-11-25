import React from 'react';

const TextPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1624] text-white py-10 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Capítulo 1: Tan cerca y tan diferentes</h1>
        <p className="text-lg text-gray-300 mb-8 text-justify">

        El capítulo ilustra cómo las diferencias económicas y sociales entre Nogales, Arizona, y Nogales, Sonora, son el resultado 
        de una combinación de factores que incluyen la renta, la educación, la salud, la seguridad, la calidad de las instituciones 
        y la inversión. Estas disparidades no solo afectan la calidad de vida de los residentes, sino que también generan tensiones 
        y resentimientos que pueden tener repercusiones políticas más amplias. La situación en estas dos ciudades sirve como un 
        microcosmos de las desigualdades más amplias que existen entre países ricos y pobres en el mundo.
        </p>

        <table className="min-w-full bg-white text-black mb-8 border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border border-gray-300">Aspecto</th>
              <th className="py-2 px-4 border border-gray-300">Nogales, Arizona</th>
              <th className="py-2 px-4 border border-gray-300">Nogales, Sonora</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-200 hover:bg-blue-300 transition-colors">
              <td className="py-2 px-4 border border-gray-300">Renta Media de los Hogares</td>
              <td className="py-2 px-4 border border-gray-300">$30,000 anuales</td>
              <td className="py-2 px-4 border border-gray-300">$10,000 anuales (aproximadamente)</td>
            </tr>
            <tr className="bg-green-200 hover:bg-green-300 transition-colors">
              <td className="py-2 px-4 border border-gray-300">Educación</td>
              <td className="py-2 px-4 border border-gray-300">Alta tasa de asistencia escolar y secundaria completa</td>
              <td className="py-2 px-4 border border-gray-300">Baja tasa de educación secundaria completada</td>
            </tr>
            <tr className="bg-yellow-200 hover:bg-yellow-300 transition-colors">
              <td className="py-2 px-4 border border-gray-300">Condiciones de Salud</td>
              <td className="py-2 px-4 border border-gray-300">Mejor salud general y mayor esperanza de vida</td>
              <td className="py-2 px-4 border border-gray-300">Condiciones de salud deficientes y alta mortalidad infantil</td>
            </tr>
            <tr className="bg-red-200 hover:bg-red-300 transition-colors">
              <td className="py-2 px-4 border border-gray-300">Seguridad</td>
              <td className="py-2 px-4 border border-gray-300">Baja criminalidad y ambiente seguro</td>
              <td className="py-2 px-4 border border-gray-300">Alta criminalidad y riesgo para los negocios</td>
            </tr>
            <tr className="bg-purple-200 hover:bg-purple-300 transition-colors">
              <td className="py-2 px-4 border border-gray-300">Instituciones Políticas y Económicas</td>
              <td className="py-2 px-4 border border-gray-300">Democracia y rendición de cuentas</td>
              <td className="py-2 px-4 border border-gray-300">Control histórico del PRI y falta de democracia</td>
            </tr>
            <tr className="bg-orange-200 hover:bg-orange-300 transition-colors">
              <td className="py-2 px-4 border border-gray-300">Inversión Extranjera</td>
              <td className="py-2 px-4 border border-gray-300">Economía más estable y diversificada</td>
              <td className="py-2 px-4 border border-gray-300">Dependencia de maquiladoras con condiciones laborales inferiores</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TextPage;
