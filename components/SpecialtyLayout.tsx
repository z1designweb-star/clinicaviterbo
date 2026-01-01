
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';

interface SpecialtyLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SpecialtyLayout: React.FC<SpecialtyLayoutProps> = ({ title, children }) => {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/#especialidades" 
          className="inline-flex items-center text-emerald-600/70 text-[11px] font-bold mb-8 hover:text-emerald-800 transition-all uppercase tracking-widest"
        >
          <ChevronLeft size={16} className="mr-1" />
          Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-6 border-b border-emerald-50 pb-4 tracking-tight">{title}</h1>
            <div className="prose prose-sm md:prose-base prose-emerald max-w-none text-gray-600 leading-relaxed space-y-5">
              {children}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-emerald-900 p-8 rounded-2xl shadow-lg shadow-emerald-900/10 text-white">
                <h3 className="text-lg font-bold mb-3">Agende sua Consulta</h3>
                <p className="text-emerald-100/70 mb-6 text-xs leading-relaxed">Equipe multidisciplinar pronta para oferecer o melhor tratamento.</p>
                <Link 
                  to="/agendamento" 
                  className="flex items-center justify-center w-full py-3 bg-white text-emerald-900 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-emerald-50 transition-all gap-2"
                >
                  <Calendar size={14} />
                  Marcar Agora
                </Link>
              </div>

              <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.2em] mb-4">Diferenciais Viterbo</h3>
                <ul className="space-y-3">
                  {[
                    "Equipe Multidisciplinar",
                    "6 Unidades na Bahia",
                    "Tradição e Modernidade",
                    "Foco no Paciente"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[11px] text-gray-500 font-medium">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full shrink-0" />
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
