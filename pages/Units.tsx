
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Users, Building2, Sparkles } from 'lucide-react';
import { UNITS } from '../constants';

const Units: React.FC = () => {
  return (
    <div className="pt-36 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-200">
            <Building2 size={14} />
            Presença Regional
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6 uppercase tracking-tight">Nossas Unidades</h1>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Clínica Viterbo está presente em localizações estratégicas para oferecer o melhor atendimento em Salvador e Lauro de Freitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UNITS.map((unit, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] shadow-sm border border-emerald-100 group flex flex-col hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 relative overflow-hidden">
              {/* Decorative Top Accent */}
              <div className="h-2 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />
              
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-[0.15em] border border-emerald-100">
                      {unit.city}
                    </span>
                    <Sparkles size={16} className="text-emerald-200 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors leading-tight">
                    {unit.name}
                  </h3>
                </div>
                
                <div className="space-y-6 text-gray-600 mb-10 flex-grow">
                  <div className="flex items-start gap-4 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100/50">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-emerald-100">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-emerald-600/60 uppercase mb-1">Localização</p>
                      <span className="text-sm leading-relaxed font-semibold text-emerald-900/80">{unit.address}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 px-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-emerald-600/60 uppercase">Contato Direto</p>
                      <a 
                        href={`tel:${unit.phone.replace(/\D/g, '')}`}
                        className="text-lg font-black text-emerald-950 hover:text-emerald-600 transition-colors"
                      >
                        {unit.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link 
                    to={`/unidades/${unit.slug}/medicos`}
                    className="flex items-center justify-center gap-3 w-full py-4.5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-200 group-hover:scale-[1.03] active:scale-95 py-4"
                  >
                    <Users size={18} />
                    Corpo Clínico
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Units;
