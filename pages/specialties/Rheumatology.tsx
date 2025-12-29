
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Rheumatology: React.FC = () => {
  return (
    <SpecialtyLayout title="Reumatologia" image="https://images.unsplash.com/photo-1579154235602-3c2cfa459ac1?auto=format&fit=crop&q=80&w=1200">
      <p>
        A Reumatologia é a especialidade médica que estuda, diagnostica e trata patologias que afetam o sistema musculoesquelético: articulações, ligamento, músculos, ossos, tendões e o tecido conjuntivo.
      </p>
      
      <h3 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-6">Principais Áreas de Atuação</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-emerald-800 mb-4">Tipos de Doenças</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><strong>Autoimunes:</strong> Lúpus, Artrite Reumatoide, Esclerodermia.</li>
            <li><strong>Degenerativas:</strong> Artrose, Osteoporose.</li>
            <li><strong>Inflamatórias:</strong> Espondiloartrite, Artrite Psoriásica.</li>
            <li><strong>Metabólicas:</strong> Gota.</li>
            <li><strong>Outras:</strong> Fibromialgia, Vasculites.</li>
          </ul>
        </div>
        <div className="bg-emerald-50 p-6 rounded-3xl">
          <h4 className="font-bold text-emerald-900 mb-4">Sintomas Patológicos</h4>
          <ul className="space-y-3 text-xs text-emerald-950">
            <li>• Dores nas articulações persistentes por mais de 6 semanas.</li>
            <li>• Inchaço, vermelhidão e calor nas articulações.</li>
            <li>• Dificuldade de movimentos e rigidez matinal.</li>
          </ul>
        </div>
      </div>
    </SpecialtyLayout>
  );
};

export default Rheumatology;
