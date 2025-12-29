
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const MassageTherapy: React.FC = () => {
  return (
    <SpecialtyLayout title="Massoterapia" image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200">
      <p>
        A MASSOTERAPIA engloba diversas técnicas manuais focadas no equilíbrio físico e mental. Na Clínica Viterbo, oferecemos:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="font-bold text-emerald-900 mb-2">Relaxamento Muscular</h4>
          <p className="text-sm text-gray-600">Objetiva a liberação das tensões localizadas na musculatura, proporcionando uma sensação de profundo bem-estar.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="font-bold text-emerald-900 mb-2">Reflexologia Podal</h4>
          <p className="text-sm text-gray-600">Técnica de massagem em pontos específicos dos pés, eficaz no tratamento de stress, cansaço e tensão.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="font-bold text-emerald-900 mb-2">Tui-ná</h4>
          <p className="text-sm text-gray-600">Uma das mais antigas artes de cura da medicina tradicional chinesa, utilizada milenarmente.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="font-bold text-emerald-900 mb-2">Shiatsu e Do-In</h4>
          <p className="text-sm text-gray-600">Recursos da medicina oriental que consistem na pressão e manipulação de pontos sensíveis do corpo.</p>
        </div>
      </div>
    </SpecialtyLayout>
  );
};

export default MassageTherapy;
