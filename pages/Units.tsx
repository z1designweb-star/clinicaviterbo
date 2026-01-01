
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Users, Building2, Sparkles } from 'lucide-react';
import { UNITS } from '../constants';

const Units: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest mb-4 border border-emerald-100">
            <Building2 size={12} />
            Presença Regional
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4 tracking-tight">Nossas Unidades</h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Estrutura moderna e localizações estratégicas em Salvador e Lauro de Freitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNITS.map((unit, index) => (
            <div key={index} className="bg-white rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col overflow-hidden group">
              <div className="h-1.5 w-full bg-emerald-100 group-hover:bg-emerald-600 transition-colors" />
              
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <span className="inline-block bg-gray-50 text-gray-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-3">
                    {unit.city}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    {unit.name}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-500 leading-relaxed font-medium">{unit.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-emerald-500 shrink-0" />
                    <a 
                      href={`tel:${unit.phone.replace(/\D/g, '')}`}
                      className="text-base font-bold text-emerald-950 hover:text-emerald-600 transition-colors"
                    >
                      {unit.phone}
                    </a>
                  </div>
                </div>

                <Link 
                  to={`/unidades/${unit.slug}/medicos`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 text-emerald-700 text-xs font-black rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 active:scale-95"
                >
                  <Users size={16} />
                  Corpo Clínico
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Units;
