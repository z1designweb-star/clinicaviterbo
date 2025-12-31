
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock, Stethoscope, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { UNITS, UNIT_DOCTORS } from '../constants';

const UnitDoctors: React.FC = () => {
  const { unitSlug } = useParams<{ unitSlug: string }>();
  const unit = UNITS.find(u => u.slug === unitSlug);
  const doctors = unitSlug ? UNIT_DOCTORS[unitSlug] : [];

  if (!unit) {
    return (
      <div className="pt-48 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Unidade não encontrada.</h1>
        <Link to="/unidades" className="text-emerald-600 hover:underline mt-4 inline-block">Voltar para Unidades</Link>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/unidades" 
          className="inline-flex items-center text-emerald-600 font-bold mb-8 hover:text-emerald-800 transition-all group"
        >
          <div className="p-1 bg-emerald-50 rounded-lg mr-2 group-hover:bg-emerald-100 transition-colors">
            <ChevronLeft size={20} />
          </div>
          Voltar para Unidades
        </Link>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">{unit.name}</h1>
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm max-w-2xl">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-emerald-200">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest mb-1">Endereço da Unidade</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-semibold">{unit.address}</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
               <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100/50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                 <Sparkles size={14} className="text-emerald-500" />
                 {doctors.length} Especialistas Disponíveis
               </div>
            </div>
          </div>
        </div>

        {doctors && doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] shadow-sm border border-emerald-100 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 flex flex-col group overflow-hidden relative">
                {/* Decorative Top Accent */}
                <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                        <User size={32} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center border-2 border-white text-white">
                        <Sparkles size={10} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-emerald-950 leading-tight group-hover:text-emerald-600 transition-colors">{doc.name}</h3>
                      <div className="inline-flex mt-1 px-2 py-0.5 bg-emerald-50 text-[10px] font-black text-emerald-700 rounded uppercase tracking-tighter border border-emerald-200">
                        CRM {doc.crm}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-emerald-600/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Stethoscope size={14} className="text-emerald-500" />
                      Especialidades
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialties.length > 0 ? (
                        doc.specialties.map((spec, sIdx) => (
                          <span key={sIdx} className="px-3 py-1.5 bg-emerald-50/50 text-emerald-800 text-[11px] font-bold rounded-xl border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                            {spec}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-400 italic">Especialidade não informada</span>
                      )}
                    </div>
                  </div>

                  <div className="mb-8 flex-grow p-5 bg-emerald-50/30 rounded-2xl border border-emerald-100/50">
                    <p className="text-[10px] font-bold text-emerald-600/40 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Clock size={14} className="text-emerald-500" />
                      Disponibilidade
                    </p>
                    <div className="space-y-4">
                      {doc.schedule.map((sch, schIdx) => (
                        <div key={schIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shadow-sm" />
                          <div className="flex flex-col">
                            <span className="text-[11px] font-black text-emerald-900 uppercase tracking-tight">{sch.day}</span>
                            <span className="text-xs text-emerald-700/70 font-medium">{sch.hours}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link 
                      to="/agendamento"
                      className="flex items-center justify-center gap-3 w-full py-4.5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-200 group-hover:scale-[1.03] active:scale-95 py-4"
                    >
                      <Calendar size={20} className="fill-white/20" />
                      Agende sua Consulta
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-emerald-50 rounded-[3rem] p-16 text-center border-2 border-dashed border-emerald-200">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Agenda em Atualização</h3>
            <p className="text-emerald-800/70 font-medium italic max-w-md mx-auto mb-10">Estamos otimizando as escalas de atendimento desta unidade. Você pode consultar horários em tempo real através da nossa central.</p>
            <Link to="/agendamento" className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
              <MessageCircle size={20} />
              Falar com Central WhatsApp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitDoctors;
