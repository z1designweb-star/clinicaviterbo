
import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const Units: React.FC = () => {
  const units = [
    { name: 'Unidade 1 - Itaigara', address: 'Av. ACM, Edf. Cidadela, Salvador - BA', phone: '(71) 3016-3015' },
    { name: 'Unidade 2 - Pituba', address: 'Rua das Hortênsias, Salvador - BA', phone: '(71) 3016-3015' },
    { name: 'Unidade 3 - Barra', address: 'Av. Princesa Isabel, Salvador - BA', phone: '(71) 3016-3015' },
    { name: 'Unidade 4 - Caminho das Árvores', address: 'Alameda das Espatódeas, Salvador - BA', phone: '(71) 3016-3015' },
    { name: 'Unidade 5 - Imbuí', address: 'Rua das Araras, Salvador - BA', phone: '(71) 3016-3015' },
    { name: 'Unidade 6 - Shopping da Bahia', address: 'Av. Tancredo Neves, Salvador - BA', phone: '(71) 3016-3015' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">Nossas Unidades</h1>
          <p className="text-lg text-gray-600">
            Estamos presentes em 6 localizações estratégicas em Salvador para facilitar o seu acesso à saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-48 bg-emerald-100 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${index+40}/800/400`} 
                  alt={unit.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Salvador - BA</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{unit.name}</h3>
                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-emerald-600 shrink-0 mt-1" size={18} />
                    <span className="text-sm">{unit.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-emerald-600 shrink-0 mt-1" size={18} />
                    <span className="text-sm">{unit.phone}</span>
                  </div>
                </div>
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(unit.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-800 transition-colors"
                >
                  Ver no Google Maps
                  <ExternalLink size={16} className="ml-2" />
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
