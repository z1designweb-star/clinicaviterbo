
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Orthopedics: React.FC = () => {
  return (
    <SpecialtyLayout title="Ortopedia" image="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=1200">
      <p>
        A ortopedia é uma especialidade médica que trata as patologias provenientes de lesões e traumas que afetam o sistema locomotor do indivíduo, incluindo ossos, músculos, tendões, articulações, cartilagens e ligamentos.
      </p>
      <p>
        A ortopedia pode tratar doenças relacionadas a traumas, como torções, fraturas e luxações. Os traumas podem ser causados por impactos imediatos provenientes de fontes externas, como acidentes, pancadas e quedas e também trata condições congênitas.
      </p>
      <p className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600 italic">
        É importante consultar o ortopedista após estas ocorrências, a fim de que ele avalie possíveis fraturas, rupturas, entorses e outros problemas que podem vir a agravar caso não tenha a atenção e tratamento adequado.
      </p>
    </SpecialtyLayout>
  );
};

export default Orthopedics;
