
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';

interface SpecialtyLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SpecialtyLayout: React.FC<SpecialtyLayoutProps> = ({ title, children }) => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/#especialidades" 
          className="inline-flex items-center text-emerald-600 font-semibold mb-8 hover:text-emerald-800 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Voltar para Especialidades
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-8 border-b border-emerald-100 pb-4">{title}</h1>
            <div className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed space-y-6">
              {children}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Agende seu Atendimento</h3>
                <p className="text-emerald-100 mb-6 text-sm">Oferecemos tratamento especializado com foco no seu bem-estar.</p>
                <Link 
                  to="/agendamento" 
                  className="flex items-center justify-center w-full py-4 bg-white text-emerald-900 rounded-xl font-bold hover:bg-emerald-50 transition-all gap-2"
                >
                  <Calendar size={18} />
                  Marcar Consulta
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Por que escolher a Viterbo?</h3>
                <ul className="space-y-4">
                  {[
                    "Equipe Multidisciplinar",
                    "6 Unidades em Salvador e Lauro de Freitas",
                    "Atendimento Humanizado",
                    "Tecnologia e Tradição"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyLayout;
