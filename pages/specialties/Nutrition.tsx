
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Nutrition: React.FC = () => {
  return (
    <SpecialtyLayout title="Nutrição">
      <p className="text-xl font-medium text-emerald-800">
        A NUTRIÇÃO é componente fundamental no tratamento das principais doenças da atualidade. 
      </p>
      <p>
        Já está confirmado por meio de estudos científicos, que uma alimentação equilibrada previne doenças e pode inclusive controlar os sintomas de diversas delas. Lembre-se sempre: Uma boa alimentação é sinônimo de uma vida saudável, afinal você é o que você come! 
      </p>
      <p>
        O atendimento personalizado, onde por meio de uma avaliação nutricional detalhada, será elaborado um plano alimentar de acordo com seus objetivos nutricionais, necessidades nutricionais e rotina individual. Esse serviço é direcionado para indivíduos com doenças de origem alimentar e pessoas que buscam reeducação alimentar e uma melhora na qualidade de vida. 
      </p>
      <p className="font-bold text-gray-900">
        Alimente-se corretamente, trate doenças e alcance disposição e vitalidade.
      </p>
    </SpecialtyLayout>
  );
};

export default Nutrition;
