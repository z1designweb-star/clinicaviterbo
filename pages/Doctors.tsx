
import React, { useState, useMemo } from 'react';
import { Search, Filter, User, MapPin, Stethoscope, MessageSquare, Sparkles, XCircle } from 'lucide-react';
import { ALL_DOCTORS, UNIQUE_DOCTOR_SPECIALTIES, UNITS, CONTACT_INFO } from '../constants';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');

  const filteredDoctors = useMemo(() => {
    return ALL_DOCTORS.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === '' || doc.specialties.includes(selectedSpecialty);
      const matchesUnit = selectedUnit === '' || doc.unitSlug === selectedUnit;
      return matchesSearch && matchesSpecialty && matchesUnit;
    });
  }, [searchTerm, selectedSpecialty, selectedUnit]);

  const getWhatsAppLink = (doctorName: string, unitSlug: string) => {
    const unit = UNITS.find(u => u.slug === unitSlug);
    const message = encodeURIComponent(`Olá, gostaria de agendar uma consulta com o(a) ${doctorName} na ${unit?.name || 'Clínica Viterbo'}.`);
    return `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${message}`;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('');
    setSelectedUnit('');
  };

  return (
    <div className="pt-36 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-200">
            <Sparkles size={14} />
            Corpo Clínico
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6 uppercase tracking-tight">Nossos Médicos</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Localize os melhores especialistas em Acupuntura e Clínica da Dor em nossa rede.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-3xl shadow-xl shadow-emerald-900/5 p-6 md:p-8 border border-emerald-100 mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Filter */}
            <div className="relative">
              <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-2 px-1">Buscar Especialista</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <input 
                  type="text"
                  placeholder="Nome do médico..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-emerald-50/30 border border-emerald-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-sm font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <div>
              <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-2 px-1">Especialidade</p>
              <div className="relative">
                <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <select 
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-emerald-50/30 border border-emerald-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-sm font-medium appearance-none"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">Todas as Especialidades</option>
                  {UNIQUE_DOCTOR_SPECIALTIES.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Unit Filter */}
            <div>
              <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-2 px-1">Unidade de Atendimento</p>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <select 
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-emerald-50/30 border border-emerald-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-sm font-medium appearance-none"
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                >
                  <option value="">Todas as Unidades</option>
                  {UNITS.map(unit => (
                    <option key={unit.slug} value={unit.slug}>{unit.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {(searchTerm || selectedSpecialty || selectedUnit) && (
            <div className="mt-6 flex justify-center">
              <button 
                onClick={clearFilters}
                className="flex items-center gap-2 text-xs font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-widest"
              >
                <XCircle size={14} />
                Limpar Filtros
              </button>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="mb-8 flex items-center justify-between">
           <p className="text-sm font-bold text-emerald-900/50 uppercase tracking-widest">
             {filteredDoctors.length} Especialistas Encontrados
           </p>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc, idx) => {
              const unit = UNITS.find(u => u.slug === doc.unitSlug);
              return (
                <div key={`${doc.unitSlug}-${idx}`} className="bg-white rounded-[2rem] shadow-sm border border-emerald-100 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 flex flex-col group overflow-hidden relative">
                  <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
                  
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                          <User size={32} />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-extrabold text-emerald-950 leading-tight group-hover:text-emerald-600 transition-colors truncate">{doc.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex px-2 py-0.5 bg-emerald-50 text-[9px] font-black text-emerald-700 rounded uppercase tracking-tighter border border-emerald-200">
                            CRM {doc.crm}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 mb-10 flex-grow">
                      <div>
                        <p className="text-[10px] font-bold text-emerald-600/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <MapPin size={14} className="text-emerald-500" />
                          Unidade
                        </p>
                        <p className="text-sm font-black text-emerald-900">{unit?.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium truncate">{unit?.address}</p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold text-emerald-600/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <Stethoscope size={14} className="text-emerald-500" />
                          Especialidades
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {doc.specialties.map((spec, sIdx) => (
                            <span key={sIdx} className="px-3 py-1 bg-emerald-50/50 text-emerald-800 text-[10px] font-bold rounded-lg border border-emerald-100">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a 
                        href={getWhatsAppLink(doc.name, doc.unitSlug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-200 group-hover:scale-[1.03] active:scale-95"
                      >
                        <MessageSquare size={18} />
                        Otimizar Agendamento
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-emerald-200">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-2">Nenhum especialista encontrado</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">Tente ajustar seus filtros ou termos de busca para localizar o médico desejado.</p>
            <button 
              onClick={clearFilters}
              className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
            >
              Resetar Busca
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
