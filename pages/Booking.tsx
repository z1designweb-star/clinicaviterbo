
import React from 'react';
import { Calendar, Phone, MessageSquare, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Booking: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">Agende sua Consulta</h1>
          <p className="text-lg text-gray-600">
            Escolha o canal de sua preferência e marque seu atendimento agora mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Via WhatsApp</h3>
            <p className="text-gray-600 mb-8">Atendimento rápido e direto com nossa central de agendamentos.</p>
            <a 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
            >
              Iniciar Conversa
            </a>
          </div>

          <div className="bg-emerald-900 p-10 rounded-3xl shadow-xl text-center flex flex-col items-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Calendar size={120} />
             </div>
            <div className="w-16 h-16 bg-emerald-800 text-emerald-300 rounded-full flex items-center justify-center mb-6 relative z-10">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Via Telefone</h3>
            <p className="text-emerald-200 mb-8 relative z-10">Ligue para nossa central única de atendimento e escolha sua unidade.</p>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
              className="mt-auto w-full py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 relative z-10"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Horário de Atendimento</h3>
            <div className="text-gray-600 space-y-2 mb-8 text-left w-full">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Segunda - Sexta</span>
                <span className="font-semibold">07h às 19h</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Sábado</span>
                <span className="font-semibold">07h às 13h</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Domingo</span>
                <span className="font-semibold">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">O que trazer na primeira consulta?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0">1</div>
                  <span>Documento de identificação com foto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0">2</div>
                  <span>Carteira do convênio médico (se houver).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0">3</div>
                  <span>Exames de imagem ou laboratoriais recentes relacionados à sua queixa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0">4</div>
                  <span>Lista de medicamentos que faz uso contínuo.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
               <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Checkup" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
