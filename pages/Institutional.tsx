
import React from 'react';

const Institutional: React.FC = () => {
  return (
    <div className="pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6 uppercase tracking-tight">Institucional</h1>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conheça a trajetória e os pilares que sustentam a excelência da Clínica Viterbo no cuidado com a sua saúde.
          </p>
        </div>

        {/* Pilares Section (Mission, Vision, Values) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              Diretrizes Estratégicas
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Nossos Pilares</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-emerald-50 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white text-emerald-700 rounded-2xl flex items-center justify-center font-serif text-3xl font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-100 transition-all duration-300">
                M
              </div>
              <h3 className="font-bold text-emerald-900 mb-4 text-xl tracking-tight">MISSÃO</h3>
              <p className="text-emerald-800/80 leading-relaxed">
                Prestar assistência de excelência, buscando o restabelecimento do equilíbrio físico e mental, aliando o melhor das técnicas da Medicina Tradicional Chinesa com a Medicina Ocidental e Clínica da Dor.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-emerald-50 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center font-serif text-3xl font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-100 transition-all duration-300">
                V
              </div>
              <h3 className="font-bold text-emerald-900 mb-4 text-xl tracking-tight">VISÃO</h3>
              <p className="text-emerald-800/80 leading-relaxed">
                Ser um referencial de alta confiabilidade em saúde e qualidade nos serviços prestados.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-emerald-50 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white text-emerald-700 rounded-2xl flex items-center justify-center font-serif text-3xl font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-100 transition-all duration-300">
                V
              </div>
              <h3 className="font-bold text-emerald-900 mb-4 text-xl tracking-tight">VALORES</h3>
              <p className="text-emerald-800/80 leading-relaxed">
                A Clínica Viterbo valoriza a competência técnica, através do aprimoramento da excelência e agilidade dos serviços prestados pelos seus colaboradores, priorizando o respeito ao cliente através de um relacionamento harmonioso e cordial, preservando a sintonia com os bons valores do universo.
              </p>
            </div>
          </div>
        </div>

        {/* Histórico Section */}
        <div className="bg-emerald-900 text-white rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full -mr-48 -mt-48 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-800 rounded-full -ml-36 -mb-36 opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-widest">HISTÓRICO</h2>
              <div className="mt-4 w-24 h-1 bg-emerald-400 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-emerald-50 leading-loose text-lg md:text-xl text-center md:text-justify font-light italic">
                A <span className="font-bold text-white underline decoration-emerald-500 decoration-2 underline-offset-8">Clínica Viterbo</span> foi fundada no ano de <span className="text-emerald-400 font-bold">2002</span> para promover um atendimento exemplar e humanizado, objetivando a cura ou melhora das desarmonias internas do corpo humano utilizando-se dos melhores recursos das técnicas milenares da Medicina Tradicional Chinesa com as mais modernas da Medicina Ocidental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
