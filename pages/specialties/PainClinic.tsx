
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const PainClinic: React.FC = () => {
  return (
    <SpecialtyLayout title="Clínica da Dor" image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200">
      <p className="text-xl font-medium text-emerald-800">
        Um dos sintomas que mais levam as pessoas aos consultórios médicos é a dor. 
      </p>
      <p>
        Para atender a grande demanda a medicina hoje conta com a clínica da dor ou algologia, uma especialidade que é voltada para o tratamento e estudo da dor crônica, aquela que deixa de ser a causa de uma doença para se tornar o problema em si. 
      </p>
      <p>
        O atendimento é realizado após uma consulta clínica especializada onde serão indicados os procedimentos pertinentes, desde a prescrição de medicamentos a orientação de outros métodos terapêuticos (acupuntura, fisioterapia, RPG, Pilates, Hidroterapia, entre outros) bem como a realização de procedimentos específicos.
      </p>
      <h3 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Procedimentos Realizados</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Bloqueios anestésicos em pontos-gatilho;</li>
        <li>Bloqueios cranianos;</li>
        <li>Bloqueios bucomaxilo;</li>
        <li>Bloqueios simpático por via venosa;</li>
        <li>Alcoolização de nervos, entre outros.</li>
      </ul>
    </SpecialtyLayout>
  );
};

export default PainClinic;
