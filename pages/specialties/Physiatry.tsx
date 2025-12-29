
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Physiatry: React.FC = () => {
  return (
    <SpecialtyLayout title="Fisiatria" image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200">
      <p className="text-xl font-medium text-emerald-800">
        A Fisiatria, ou Medicina Física e Reabilitação, foca na restauração da funcionalidade e qualidade de vida.
      </p>
      <div className="bg-gray-100 p-12 rounded-3xl text-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500 italic">Conteúdo detalhado sobre Fisiatria em breve.</p>
      </div>
    </SpecialtyLayout>
  );
};

export default Physiatry;
