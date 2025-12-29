
import React from 'react';

const Institutional: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">Nossa Instituição</h1>
          <p className="text-lg text-gray-600">
            A Clínica Viterbo é sinônimo de tradição e inovação no tratamento da dor em Salvador, Bahia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
              alt="Clínica Viterbo Interior" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Missão, Visão e Valores</h2>
            <div className="space-y-4">
              <div className="p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-600">
                <h3 className="font-bold text-emerald-900 mb-2">Missão</h3>
                <p className="text-gray-700">Proporcionar saúde e bem-estar através de tratamentos especializados e humanizados, focando no alívio da dor e melhora da qualidade de vida.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                <h3 className="font-bold text-gray-900 mb-2">Visão</h3>
                <p className="text-gray-700">Ser a principal referência em medicina da dor e acupuntura no estado da Bahia, expandindo nosso alcance e excelência técnica.</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-600">
                <h3 className="font-bold text-emerald-900 mb-2">Valores</h3>
                <p className="text-gray-700">Ética, Comprometimento, Humanização, Inovação e Respeito ao Paciente.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8 text-white">Nossa História</h2>
          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl mx-auto">
            Fundada pelo Dr. Viterbo, a clínica nasceu da necessidade de um centro especializado que unisse a medicina milenar da acupuntura com as técnicas mais modernas da medicina da dor. Ao longo dos anos, crescemos para 6 unidades integradas, servindo a comunidade de Salvador com dedicação e resultados comprovados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
