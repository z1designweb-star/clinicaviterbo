
import React from 'react';

const Institutional: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4 tracking-tight uppercase">Institucional</h1>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Conheça os pilares de ética e cuidado que fundamentam a Clínica Viterbo desde sua fundação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { t: 'M', title: 'Missão', text: 'Prestar assistência de excelência buscando o restabelecimento do equilíbrio físico e mental aliando as medicinas Oriental e Ocidental.' },
            { t: 'V', title: 'Visão', text: 'Ser o referencial de maior confiabilidade em saúde e qualidade no tratamento da dor em toda a região.' },
            { t: 'V', title: 'Valores', text: 'Competência técnica, aprimoramento contínuo, ética e respeito incondicional ao paciente.' }
          ].map((item, i) => (
            <div key={i} className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 group hover:border-emerald-300 transition-all">
              <div className="w-10 h-10 bg-white text-emerald-600 rounded-lg flex items-center justify-center font-serif text-xl font-bold mb-5 border border-emerald-50 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {item.t}
              </div>
              <h3 className="text-sm font-black text-emerald-900 uppercase tracking-widest mb-3">{item.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-950 text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-serif font-bold uppercase tracking-widest mb-6 opacity-50">Nosso Histórico</h2>
            <p className="text-base md:text-lg text-emerald-50/90 leading-relaxed font-light italic">
              Fundada em <span className="text-emerald-400 font-bold">2002</span> pelo Dr. Walter Viterbo, a clínica nasceu com o propósito de unir o conhecimento milenar à medicina moderna para oferecer tratamentos personalizados contra a dor crônica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
