
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Stethoscope, MessageSquare, XCircle } from 'lucide-react';
import { ALL_DOCTORS, UNIQUE_DOCTOR_SPECIALTIES, UNITS, CONTACT_INFO } from '../constants';

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('');

  const filtered = useMemo(() => {
    return ALL_DOCTORS.filter(doc => 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpec === '' || doc.specialties.includes(selectedSpec))
    );
  }, [searchTerm, selectedSpec]);

  return (
    <div className="pt-28 pb-16 bg-gray-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 uppercase tracking-tight">Nosso Corpo Clínico</h1>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-emerald-50 shadow-sm mb-8 flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
            <input 
              type="text" 
              placeholder="Buscar médico..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-xs outline-none border border-transparent focus:border-emerald-200"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="px-4 py-2 bg-gray-50 rounded-xl text-xs outline-none border border-transparent focus:border-emerald-200"
            value={selectedSpec}
            onChange={e => setSelectedSpec(e.target.value)}
          >
            <option value="">Todas Especialidades</option>
            {UNIQUE_DOCTOR_SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((doc, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all flex flex-col h-full group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Stethoscope size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-emerald-950 truncate group-hover:text-emerald-700">{doc.name}</h3>
                  <p className="text-[9px] text-gray-400 font-bold">CRM {doc.crm}</p>
                </div>
              </div>
              <div className="flex-grow space-y-3">
                <div className="flex flex-wrap gap-1">
                  {doc.specialties.map((s, j) => (
                    <span key={j} className="text-[8px] px-1.5 py-0.5 bg-gray-50 text-emerald-700 rounded-md border border-gray-100">{s}</span>
                  ))}
                </div>
              </div>
              <a 
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="mt-5 w-full py-2.5 bg-emerald-700 text-white text-[10px] font-black rounded-lg text-center hover:bg-emerald-800 transition-all uppercase tracking-widest"
              >
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
