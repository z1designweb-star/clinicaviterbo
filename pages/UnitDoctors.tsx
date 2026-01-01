
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, User, Clock, Stethoscope, MapPin, MessageCircle, Sparkles, Search, XCircle } from 'lucide-react';
import { UNITS, UNIT_DOCTORS, CONTACT_INFO } from '../constants';

const UnitDoctors: React.FC = () => {
  const { unitSlug } = useParams<{ unitSlug: string }>();
  const unit = UNITS.find(u => u.slug === unitSlug);
  const rawDoctors = unitSlug ? UNIT_DOCTORS[unitSlug] : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const availableSpecialties = useMemo(() => {
    return Array.from(new Set(rawDoctors.flatMap(doc => doc.specialties))).sort();
  }, [rawDoctors]);

  const filteredDoctors = useMemo(() => {
    return rawDoctors.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === '' || doc.specialties.includes(selectedSpecialty);
      return matchesSearch && matchesSpecialty;
    });
  }, [rawDoctors, searchTerm, selectedSpecialty]);

  const getWhatsAppLink = (doctorName: string) => {
    const message = encodeURIComponent(`Olá, gostaria de agendar uma consulta com o(a) ${doctorName} na unidade ${unit?.name}.`);
    return `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${message}`;
  };

  if (!unit) return null;

  return (
    <div className="pt-32 pb-20 bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/unidades" className="inline-flex items-center text-emerald-600 text-xs font-bold mb-8 hover:text-emerald-800 transition-all">
          <ChevronLeft size={16} className="mr-1" />
          Voltar para Unidades
        </Link>

        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-3 tracking-tight">{unit.name}</h1>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={14} className="text-emerald-500" />
              <p className="text-sm font-medium">{unit.address}</p>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-white border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 uppercase tracking-widest shadow-sm">
            {rawDoctors.length} Médicos nesta unidade
          </div>
        </div>

        {/* Search Filter - Compact */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-10 shadow-sm flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
            <input 
              type="text"
              placeholder="Pesquisar por nome..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-emerald-300 outline-none transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-emerald-300 outline-none transition-all text-sm text-gray-600 appearance-none min-w-[200px]"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="">Todas Especialidades</option>
            {availableSpecialties.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all p-6 flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <User size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-emerald-950 truncate">{doc.name}</h3>
                    <p className="text-[10px] font-black text-emerald-600/40 uppercase tracking-wider">CRM {doc.crm}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl space-y-2">
                    {doc.schedule.map((sch, schIdx) => (
                      <div key={schIdx} className="flex justify-between text-[11px]">
                        <span className="font-bold text-gray-500 uppercase">{sch.day}</span>
                        <span className="text-gray-400">{sch.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={getWhatsAppLink(doc.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-700 text-white text-xs font-black rounded-xl hover:bg-emerald-800 transition-all active:scale-95"
                >
                  <MessageCircle size={16} />
                  Agendar com Especialista
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
             <p className="text-gray-400 italic">Nenhum especialista encontrado com os filtros aplicados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitDoctors;
