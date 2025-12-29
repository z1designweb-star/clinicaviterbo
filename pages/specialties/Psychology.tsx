
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Psychology: React.FC = () => {
  return (
    <SpecialtyLayout title="Psicologia">
      <p>
        A PSICOLOGIA é a ciência que procura identificar e desvendar padrões e comportamentos humanos através da observação, interpretação e também da interação direta com as pessoas. 
      </p>
      <p>
        O principal objetivo da psicologia é compreender melhor, analisar e tratar os indivíduos para que problemas relacionados à formação da sua personalidade e da sua mente sejam solucionados, as pessoas assim podendo viver melhor.
      </p>
      <div className="bg-emerald-50 p-8 rounded-3xl mt-10">
        <h3 className="text-xl font-bold text-emerald-900 mb-4">Tratamento e Bem-estar</h3>
        <p className="text-gray-700">
          Nossas sessões focam em proporcionar um espaço seguro para o autoconhecimento e resolução de conflitos internos, auxiliando no manejo da ansiedade, depressão e estresse do dia a dia.
        </p>
      </div>
    </SpecialtyLayout>
  );
};

export default Psychology;
