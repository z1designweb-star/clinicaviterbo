
import React from 'react';
import { MapPin, Phone, ExternalLink, Building2 } from 'lucide-react';

const Units: React.FC = () => {
  const units = [
    { 
      name: 'Unidade Salvador Trade', 
      city: 'Salvador - BA',
      address: 'Av. Tancredo Neves, 1632, Ed. Salvador Trade Center, Torre Sul, salas 1801 a 1804, Caminho das Árvores, Salvador/BA, Cep: 41.820-020', 
      phone: '(71) 9 9336-0025' 
    },
    { 
      name: 'Unidade Boulevard Side', 
      city: 'Salvador - BA',
      address: 'Rua Ewerton Visco, 290, Ed Boulevard Side Empresarial, Salas 614 a 617, Cep 41.820-022, Caminho das Árvores, Salvador/BA', 
      phone: '(71) 9 9991-8031' 
    },
    { 
      name: 'Unidade Itaigara', 
      city: 'Salvador - BA',
      address: 'Av. ACM, 771, Ed Empresarial Torre do Parque, Itaigara, Salvador/BA, Cep 41.825-000', 
      phone: '(71) 9 9991-2838' 
    },
    { 
      name: 'Unidade Hangar Park', 
      city: 'Salvador - BA',
      address: 'Av. Luis Viana, 13233, Hangar Business, Park 5, salas 508/509, Paralela, Salvador/BA, Cep 41.500-300', 
      phone: '(71) 9 9991-9383' 
    },
    { 
      name: 'Unidade Comércio', 
      city: 'Salvador - BA',
      address: 'Rua Miguel Calmon, 39, Ed Nelson de Farias, salas 101/103, Comércio, Salvador/BA, Cep 40.015-010', 
      phone: '(71) 9 9991-5525' 
    },
    { 
      name: 'Unidade Dual Medical', 
      city: 'Lauro de Freitas - BA',
      address: 'Rua Lafaiete Francisco dos Santos, nº 153, Edf. Dual Medical & Business, Ala A, Salas 603 a 605, Lauro de Freitas/BA, CEP: 42.703-100', 
      phone: '(71) 9 9721-5088' 
    },
  ];

  return (
    <div className="pt-36 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6 uppercase tracking-tight">Nossas Unidades</h1>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Clínica Viterbo está presente em localizações estratégicas para oferecer o melhor atendimento em Salvador e Lauro de Freitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 group flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <Building2 size={120} />
              </div>

              <div className="mb-6">
                <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-4">
                  {unit.city}
                </span>
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {unit.name}
                </h3>
              </div>
              
              <div className="space-y-6 text-gray-600 mb-10 flex-grow relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 text-emerald-600">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm leading-relaxed font-medium">{unit.address}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 text-emerald-600">
                    <Phone size={20} />
                  </div>
                  <a 
                    href={`tel:${unit.phone.replace(/\D/g, '')}`}
                    className="text-base font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                  >
                    {unit.phone}
                  </a>
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(unit.name + ' ' + unit.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-100"
                >
                  Ver no Google Maps
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Units;
