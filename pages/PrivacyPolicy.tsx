
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Add 'User' to the list of icons imported from lucide-react
import { ChevronLeft, ShieldCheck, Lock, Eye, FileText, User } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-36 pb-20 bg-gray-50/30 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-emerald-600 font-bold mb-8 hover:text-emerald-800 transition-all group"
        >
          <div className="p-1 bg-emerald-50 rounded-lg mr-2 group-hover:bg-emerald-100 transition-colors">
            <ChevronLeft size={20} />
          </div>
          Voltar para o Início
        </Link>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden">
          {/* Header Decorativo */}
          <div className="bg-emerald-900 p-8 md:p-12 text-white relative">
            <ShieldCheck className="absolute top-1/2 right-12 -translate-y-1/2 w-24 h-24 text-emerald-800 opacity-20" />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Política de Privacidade</h1>
              <p className="text-emerald-100/80 text-sm md:text-base max-w-2xl">
                A Clínica Viterbo valoriza a privacidade e a proteção dos dados pessoais de seus pacientes e visitantes.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 prose prose-emerald max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              Esta política de privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações aplicáveis.
            </p>

            <div className="space-y-10">
              {/* Seção 1 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <Eye size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-emerald-900 m-0">1. Coleta de Informações</h2>
                </div>
                <p className="text-gray-600 mb-4">Ao acessar nosso site e/ou utilizar nossos serviços, podemos coletar as seguintes informações:</p>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="font-bold text-emerald-600">•</span>
                    <span><strong>Dados pessoais:</strong> Nome completo, e-mail, telefone, endereço, data de nascimento, gênero, entre outras informações necessárias para o agendamento de consultas e prestação de serviços de saúde.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="font-bold text-emerald-600">•</span>
                    <span><strong>Dados de saúde:</strong> Informações sobre seu histórico médico, condições de saúde, e detalhes das consultas e tratamentos, necessários para prestar um atendimento de qualidade.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="font-bold text-emerald-600">•</span>
                    <span><strong>Informações de navegação:</strong> Dados de acesso ao nosso site, como endereço IP, data e hora da visita, páginas acessadas, e tempo de permanência.</span>
                  </li>
                </ul>
              </section>

              {/* Seção 2 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-emerald-900 m-0">2. Finalidade do Tratamento</h2>
                </div>
                <p className="text-gray-600 mb-4">Utilizamos os dados coletados para os seguintes fins:</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Agendamento de consultas e tratamentos.</li>
                  <li>Prestação de serviços médicos nas áreas de acupuntura médica, massoterapia, clínica da dor, psicologia, fisioterapia, RPG, nutrição e ortopedia.</li>
                  <li>Comunicação com pacientes, incluindo confirmação de consultas e envio de informações relacionadas ao tratamento.</li>
                  <li>Melhoria de nossos serviços e do conteúdo disponível em nosso site.</li>
                  <li>Cumprimento de obrigações legais e regulatórias aplicáveis à nossa atividade.</li>
                </ul>
              </section>

              {/* Seção 3 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-emerald-900 m-0">3. Compartilhamento de Dados</h2>
                </div>
                <p className="text-gray-600 mb-4">Seus dados pessoais são confidenciais e não serão compartilhados com terceiros, exceto nas seguintes situações:</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Com prestadores de serviços que atuem em nosso nome, respeitando a confidencialidade e a proteção dos dados.</li>
                  <li>Para cumprimento de obrigações legais ou mediante ordem judicial.</li>
                  <li>Em situações de emergência médica, quando necessário para proteger a vida ou integridade física do paciente.</li>
                </ul>
              </section>

              {/* Seção 4 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <Lock size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-emerald-900 m-0">4. Segurança e Armazenamento</h2>
                </div>
                <p className="text-gray-600">
                  A Clínica Viterbo utiliza medidas de segurança técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou qualquer tipo de tratamento inadequado ou ilícito. Os dados serão armazenados pelo período necessário para cumprir as finalidades descritas ou conforme exigido por lei.
                </p>
              </section>

              {/* Seção 5 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <User size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-emerald-900 m-0">5. Seus Direitos</h2>
                </div>
                <p className="text-gray-600 mb-4">Em conformidade com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-emerald-800 mb-1">Acesso aos dados</p>
                    <p className="text-xs text-gray-500">Solicitar uma cópia das informações que temos sobre você.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-emerald-800 mb-1">Correção de dados</p>
                    <p className="text-xs text-gray-500">Pedir a correção de dados pessoais incorretos ou incompletos.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-emerald-800 mb-1">Exclusão de dados</p>
                    <p className="text-xs text-gray-500">Solicitar a exclusão dos seus dados pessoais conforme permitido por lei.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-emerald-800 mb-1">Revogação do consentimento</p>
                    <p className="text-xs text-gray-500">Retirar o consentimento para o uso de seus dados a qualquer momento.</p>
                  </div>
                </div>
              </section>

              {/* Seção Contato */}
              <section className="bg-emerald-50 p-6 md:p-8 rounded-[2rem] border border-emerald-100">
                <h2 className="text-xl font-bold text-emerald-900 mb-4 m-0">Contato</h2>
                <p className="text-gray-700 mb-6">Caso tenha dúvidas sobre esta Política de Privacidade ou queira exercer seus direitos previstos na LGPD, entre em contato conosco:</p>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="font-bold text-emerald-700">E-mail:</span>
                    <a href="mailto:diretoria@clinicaviterbo.com.br" className="hover:text-emerald-600 underline">diretoria@clinicaviterbo.com.br</a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="font-bold text-emerald-700">Telefone/WhatsApp:</span>
                    <a href="https://wa.me/5571999915525" className="hover:text-emerald-600 underline">+55 (71) 9 9991-5525</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-[10px] mt-12 uppercase tracking-widest">
          Última atualização: Março de 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
