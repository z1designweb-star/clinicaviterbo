
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock, Stethoscope } from 'lucide-react';
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
          className="inline-flex items-center text-emerald-600 font-bold mb-8 hover:text-emerald-800 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Voltar para Unidades
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-4">{unit.name}</h1>
          <p className="text-gray-600 max-w-2xl">Conheça os especialistas que atendem nesta unidade e seus respectivos horários de atendimento.</p>
        </div>

        {doctors && doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <User size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{doc.name}</h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">CRM {doc.crm}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                    <Stethoscope size={12} />
                    Especialidades
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold rounded-lg border border-gray-100">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                    <Clock size={12} />
                    Horários de Atendimento
                  </p>
                  <div className="space-y-3">
                    {doc.schedule.map((sch, schIdx) => (
                      <div key={schIdx} className="flex flex-col">
                        <span className="text-xs font-bold text-gray-800">{sch.day}</span>
                        <span className="text-xs text-gray-500">{sch.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-emerald-50 rounded-3xl p-12 text-center border-2 border-dashed border-emerald-200">
            <p className="text-emerald-800 font-medium italic">Informações dos médicos desta unidade em atualização. Por favor, consulte nossa central no WhatsApp.</p>
            <Link to="/agendamento" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all">
              <Calendar size={18} />
              Central de Atendimento
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitDoctors;
