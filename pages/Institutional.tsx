
import React from 'react';

const Institutional: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6 uppercase tracking-tight">Institucional</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conheça a trajetória e os pilares que sustentam a excelência da Clínica Viterbo no cuidado com a sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
              alt="Clínica Viterbo Interior" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-emerald-100 pb-4">Nossos Pilares</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">M</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-1 text-lg">MISSÃO</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Prestar assistência de excelência, buscando o restabelecimento do equilíbrio físico e mental, aliando o melhor das técnicas da Medicina Tradicional Chinesa com a Medicina Ocidental e Clínica da Dor.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">V</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-1 text-lg">VISÃO</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Ser um referencial de alta confiabilidade em saúde e qualidade nos serviços prestados.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">V</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-1 text-lg">VALORES</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">A Clínica Viterbo valoriza a competência técnica, através do aprimoramento da excelência e agilidade dos serviços prestados pelos seus colaboradores, priorizando o respeito ao cliente através de um relacionamento harmonioso e cordial, preservando a sintonia com os bons valores do universo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-900 text-white rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-800 rounded-full -ml-24 -mb-24 opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center border-b border-emerald-800 pb-6 max-w-xs mx-auto">HISTÓRICO</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-emerald-50 leading-relaxed text-lg text-center md:text-justify font-light">
                A <span className="font-bold text-white">Clínica Viterbo</span> foi fundada no ano de <span className="text-emerald-400 font-bold">2002</span> para promover um atendimento exemplar e humanizado, objetivando a cura ou melhora das desarmonias internas do corpo humano utilizando-se dos melhores recursos das técnicas milenares da Medicina Tradicional Chinesa com as mais modernas da Medicina Ocidental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
