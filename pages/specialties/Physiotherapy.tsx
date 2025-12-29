
import React from 'react';
import SpecialtyLayout from '../../components/SpecialtyLayout';

const Physiotherapy: React.FC = () => {
  return (
    <SpecialtyLayout title="Fisioterapia">
      <p>
        Na Clínica Viterbo, a FISIOTERAPIA existe desde a convencional com serviços especializados como a Reeducação Postural Global (RPG), a Terapia Manual e o Taping.
      </p>
      <p>
        Estas técnicas, aliadas aos tratamentos convencionais da cinesioterapia e eletroterapia, agregam inúmeros benefícios ao paciente, acelerando o seu processo de reabilitação.
      </p>
      
      <div className="space-y-8 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">Terapia Manual</h3>
          <p className="text-gray-600 text-sm">
            Principal recurso da Fisioterapia Manipulativa, para a reabilitação de pacientes não apenas com problemas ortopédicos, mas também reumatológicos, neurológicos, posturais e pós-operatórios. O fisioterapeuta avalia o paciente como um todo, detectando anormalidades do movimento e formando um programa de tratamento direcionado.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">Taping</h3>
          <p className="text-gray-600 text-sm">
            Técnica baseada na recuperação da biomecânica normal pelo reposicionamento articular com o uso de esparadrapos terapêuticos. Trata as desordens neuro-mecânicas através do envio constante de estímulos proprioceptivos da região onde há o desequilíbrio muscular.
          </p>
        </div>
      </div>
    </SpecialtyLayout>
  );
};

export default Physiotherapy;
