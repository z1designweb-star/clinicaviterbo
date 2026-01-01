
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SPECIALTIES, INSURANCES, CLINIC_LOGO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/40 via-white to-white z-0" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <img src={CLINIC_LOGO} alt="" className="w-full h-full object-contain grayscale" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
              Desde 2002 cuidando de você
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 leading-tight mb-6">
              Saúde e alívio da dor <br/>
              <span className="text-emerald-600 font-light italic">com técnica e acolhimento.</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-lg leading-relaxed">
              Referência em Acupuntura Médica e Clínica da Dor. Atendimento multidisciplinar integrado para restaurar sua qualidade de vida.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/agendamento" 
                className="px-8 py-3 bg-emerald-700 text-white text-[11px] font-black rounded-xl hover:bg-emerald-800 transition-all shadow-md active:scale-95 uppercase tracking-wider"
              >
                Agendar Consulta
              </Link>
              <Link 
                to="/institucional" 
                className="px-8 py-3 bg-white text-emerald-900 text-[11px] font-black rounded-xl border border-emerald-100 hover:bg-emerald-50 transition-all uppercase tracking-wider"
              >
                Nossa História
              </Link>
            </div>

            <div className="mt-12 md:mt-20 flex gap-10 border-t border-emerald-50 pt-8">
              {[
                { val: '6', label: 'Unidades' },
                { val: '30+', label: 'Convênios' },
                { val: '10+', label: 'Especialidades' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-emerald-950">{stat.val}</p>
                  <p className="text-[8px] text-emerald-600 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties - Compact Grid */}
      <section id="especialidades" className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[9px] font-black text-emerald-600/60 uppercase tracking-widest mb-2">Especialidades</h2>
            <h3 className="text-2xl font-serif font-bold text-emerald-950">Nossos Cuidados</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {SPECIALTIES.map((spec, index) => (
              <Link 
                key={index} 
                to={`/especialidades/${spec.slug}`}
                className="p-5 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all text-center group"
              >
                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {React.cloneElement(spec.icon as React.ReactElement, { size: 18 })}
                </div>
                <h4 className="text-[11px] font-bold text-emerald-950 leading-tight">{spec.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios - Minimal */}
      <section id="convenios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[9px] font-black text-emerald-600/60 uppercase tracking-widest mb-2">Convênios</h2>
            <h3 className="text-2xl font-serif font-bold text-emerald-950">Rede Credenciada</h3>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {INSURANCES.map((insurance, index) => (
              <InsuranceLogoCard key={index} insurance={insurance} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const InsuranceLogoCard: React.FC<{ insurance: any }> = ({ insurance }) => {
  const [err, setErr] = useState(false);
  const logoUrl = insurance.imageUrl || (insurance.domain ? `https://logo.clearbit.com/${insurance.domain}` : null);

  return (
    <div className="h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all group">
      {logoUrl && !err ? (
        <img src={logoUrl} alt="" className="max-h-full max-w-full object-contain" onError={() => setErr(true)} />
      ) : (
        <span className="text-[7px] font-bold text-emerald-800 text-center uppercase">{insurance.name}</span>
      )}
    </div>
  );
};

export default Home;
