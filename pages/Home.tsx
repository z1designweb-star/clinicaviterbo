
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SPECIALTIES, INSURANCES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section / Presentation */}
      <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-emerald-900 leading-tight mb-6">
              Sua saúde e alívio da dor são <span className="text-emerald-600">nossa prioridade.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              A Clínica Viterbo é especialista em Acupuntura Médica e Clínica da Dor em Salvador e Lauro de Freitas. Com 6 unidades estrategicamente localizadas, oferecemos um atendimento humanizado e multidisciplinar para sua qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/agendamento" 
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30"
              >
                Agende sua Consulta
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/institucional" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-full border border-emerald-100 hover:bg-emerald-50 transition-all"
              >
                Conheça a Clínica
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="text-3xl font-bold text-emerald-900">6</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Unidades</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-900">30+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Convênios</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-900">10+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Especialidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Nossos Serviços</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900">Especialidades Médicas</h3>
            <div className="mt-4 w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500">Clique em uma especialidade para saber mais.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {SPECIALTIES.map((spec, index) => (
              <Link 
                key={index} 
                to={`/especialidades/${spec.slug}`}
                className="p-8 bg-emerald-50 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-300 group block"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white text-emerald-600 rounded-xl border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {spec.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">{spec.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios Section */}
      <section id="convenios" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Parcerias</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900">Convênios Atendidos</h3>
            <div className="mt-4 w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com os principais planos de saúde do mercado para garantir o seu acesso ao melhor atendimento médico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {INSURANCES.map((insurance, index) => (
              <div 
                key={index} 
                className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-100 hover:border-emerald-400 flex items-center justify-center text-center transition-all"
              >
                <span className="text-sm font-semibold text-gray-700">{insurance}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Não encontrou seu convênio? <Link to="/contato" className="text-emerald-600 font-semibold hover:underline">Consulte-nos sobre atendimentos particulares ou reembolsos.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pronto para começar seu tratamento?</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Nossa equipe está preparada para agendar sua consulta na unidade mais próxima de você.
          </p>
          <Link 
            to="/agendamento" 
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-gray-100 transition-all text-lg shadow-xl"
          >
            Agendar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
