
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SPECIALTIES, INSURANCES, CLINIC_LOGO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section / Presentation */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="mb-6 md:mb-10 animate-in fade-in slide-in-from-left-4 duration-1000">
              <img 
                src={CLINIC_LOGO} 
                alt="Logo Clínica Viterbo" 
                className="w-24 md:w-36 h-auto object-contain opacity-90" 
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-950 leading-[1.1] mb-6 tracking-tight">
              Saúde e alívio da dor <br/><span className="text-emerald-600">com excelência médica.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-xl">
              Referência em Acupuntura Médica e Clínica da Dor em Salvador e Lauro de Freitas. Atendimento multidisciplinar focado em sua qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/agendamento" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-700 text-white text-sm font-bold rounded-xl hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/10 active:scale-[0.98]"
              >
                Agendar Consulta
                <ChevronRight className="ml-1.5 w-4 h-4" />
              </Link>
              <Link 
                to="/institucional" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-emerald-900 text-sm font-bold rounded-xl border border-emerald-200 hover:bg-emerald-50 transition-all"
              >
                Conheça a Clínica
              </Link>
            </div>

            <div className="mt-12 md:mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-emerald-100/50 pt-8">
              <div>
                <p className="text-2xl font-bold text-emerald-950">6</p>
                <p className="text-[10px] text-emerald-600 uppercase tracking-widest font-black">Unidades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-950">30+</p>
                <p className="text-[10px] text-emerald-600 uppercase tracking-widest font-black">Convênios</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-950">10+</p>
                <p className="text-[10px] text-emerald-600 uppercase tracking-widest font-black">Especialidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">Nossos Serviços</h2>
            <h3 className="text-3xl font-serif font-bold text-emerald-950">Especialidades Médicas</h3>
            <div className="mt-3 w-12 h-0.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {SPECIALTIES.map((spec, index) => (
              <Link 
                key={index} 
                to={`/especialidades/${spec.slug}`}
                className="p-6 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {React.cloneElement(spec.icon as React.ReactElement, { size: 20 })}
                </div>
                <h4 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">{spec.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios Section */}
      <section id="convenios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">Parcerias</h2>
            <h3 className="text-3xl font-serif font-bold text-emerald-950">Convênios Atendidos</h3>
            <div className="mt-3 w-12 h-0.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {INSURANCES.map((insurance, index) => (
              <InsuranceLogoCard key={index} insurance={insurance} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-xs">
              Consulte-nos sobre <Link to="/contato" className="text-emerald-600 font-bold hover:underline">atendimentos particulares ou reembolsos</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action - Compact */}
      <section className="py-16 bg-emerald-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Pronto para começar seu tratamento?</h2>
          <p className="text-base text-emerald-100/70 mb-8 max-w-xl mx-auto">
            Agende sua consulta na unidade mais próxima e tenha um atendimento especializado focado em resultados.
          </p>
          <Link 
            to="/agendamento" 
            className="inline-flex items-center justify-center px-10 py-3.5 bg-emerald-500 text-emerald-950 text-sm font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-xl active:scale-95"
          >
            Agendar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

const InsuranceLogoCard: React.FC<{ insurance: { name: string, slug: string, domain?: string, imageUrl?: string } }> = ({ insurance }) => {
  const [imageError, setImageError] = useState(false);
  
  const logoUrl = insurance.imageUrl || (insurance.domain 
    ? `https://logo.clearbit.com/${insurance.domain}?size=160` 
    : null);

  return (
    <div className="bg-gray-50 p-4 h-20 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all group flex items-center justify-center grayscale hover:grayscale-0">
      {logoUrl && !imageError ? (
        <img 
          src={logoUrl} 
          alt={`Logo ${insurance.name}`} 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-[8px] font-black text-emerald-800 uppercase text-center px-1">
          {insurance.name}
        </span>
      )}
    </div>
  );
};

export default Home;
