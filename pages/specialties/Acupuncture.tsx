
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Acupuncture: React.FC = () => {
  return (
    <SpecialtyLayout title="Acupuntura Médica" image="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=1200">
      <p className="text-xl font-medium text-emerald-800">
        A ACUPUNTURA é uma terapia milenar originária da China, que consiste na aplicação de agulhas em pontos específicos do corpo para promover saúde e para tratar doenças.
      </p>
      <p>
        Estas agulhas são aplicadas sobre regiões específicas do corpo e são capazes de tratar diversas doenças físicas ou emocionais como TPM, enxaqueca, sinusite, asma, gastrite, insônia, ansiedade, estresse ou artrite por exemplo, além de melhorar o sistema imunitário.
      </p>
      <p>
        A inserção das agulhas de Acupuntura estimula as terminações nervosas existentes na pele e nos outros tecidos, enviando desta forma mensagens até ao cérebro, o que desencadeia diferentes efeitos no corpo, como ação analgésica ou anti-inflamatória.
      </p>
      <h3 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Tratamentos e Indicações</h3>
      <p>
        A acupuntura é uma técnica que pode ser usada para reforçar o sistema imunológico e para o tratamento de problemas e doenças como por exemplo:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Doenças respiratórias:</strong> sinusite, rinite, resfriado comum, asma ou bronquite;</li>
        <li><strong>Problemas neurológicos:</strong> dor de cabeça ou enxaqueca;</li>
        <li><strong>Problemas gastrointestinais:</strong> excesso de acidez no estômago, úlcera duodenal, prisão de ventre ou diarreia;</li>
        <li><strong>Problemas ortopédicos:</strong> dor ciática, lombalgia ou artrite reumatoide;</li>
        <li><strong>Distúrbios de sono:</strong> insônia;</li>
        <li><strong>Doenças emocionais:</strong> ansiedade, excesso de estresse ou depressão.</li>
      </ul>
    </SpecialtyLayout>
  );
};

export default Acupuncture;
