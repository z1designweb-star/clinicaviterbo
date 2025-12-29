
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Rpg: React.FC = () => {
  return (
    <SpecialtyLayout title="RPG" image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200">
      <p>
        O RPG (Reeducação Postural Global) é um método original realizado exclusivamente por fisioterapeutas, que trata as desarmonias do corpo humano, levando em consideração as individualidades de cada paciente. 
      </p>
      <p>
        Através desta técnica, podem-se corrigir alterações posturais, como:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
        {[
          "Escoliose", "Hipercifose", "Hiperlordose", 
          "Genu Valgo", "Genu Varo", "Hérnia de disco", 
          "Alterações nos pés"
        ].map((item, i) => (
          <li key={i} className="bg-emerald-50 px-4 py-2 rounded-lg text-emerald-800 font-medium">
            • {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 italic text-gray-600">
        Vale ressaltar que não está indicada apenas para pacientes que estejam sentindo dor, mas também para aqueles que buscam maior harmonia com o próprio corpo.
      </p>
    </SpecialtyLayout>
  );
};

export default Rpg;
