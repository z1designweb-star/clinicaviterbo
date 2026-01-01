
import React from 'react';
import { Calendar, Phone, MessageSquare, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Booking: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-4 tracking-tight">Agendamento de Consultas</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Escolha o canal de sua preferência para marcar seu atendimento com nossa equipe de especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* WhatsApp Card - Softened */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-emerald-200 transition-all text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">WhatsApp</h3>
            <p className="text-sm text-gray-500 mb-8">Atendimento ágil para agendamentos e dúvidas.</p>
            <a 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 bg-green-600 text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-all active:scale-95"
            >
              Iniciar Conversa
            </a>
          </div>

          {/* Phone Card - Less aggressive dark */}
          <div className="bg-emerald-900 p-8 rounded-3xl text-center flex flex-col items-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -mr-16 -mt-16 opacity-20 blur-2xl group-hover:bg-emerald-700 transition-all"></div>
            <div className="w-12 h-12 bg-emerald-800 text-emerald-300 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 relative z-10">Telefone</h3>
            <p className="text-sm text-emerald-100/70 mb-8 relative z-10">Ligue para nossa central única de Salvador e Lauro de Freitas.</p>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
              className="mt-auto w-full py-3 bg-white text-emerald-950 text-sm font-bold rounded-xl hover:bg-emerald-50 transition-all active:scale-95 relative z-10"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 transition-all text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Horários</h3>
            <div className="w-full space-y-3">
              <div className="flex justify-between text-xs py-2 border-b border-gray-50">
                <span className="text-gray-400 font-bold uppercase">Seg - Sex</span>
                <span className="text-emerald-900 font-bold">07h às 19h</span>
              </div>
              <div className="flex justify-between text-xs py-2 border-b border-gray-50">
                <span className="text-gray-400 font-bold uppercase">Sábado</span>
                <span className="text-emerald-900 font-bold">07h às 13h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Preparation List - Slimmed */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-6">Para sua primeira consulta</h2>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                <span>Documento oficial com foto e carteira do convênio.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                <span>Exames de imagem e laboratoriais recentes.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                <span>Lista de medicamentos em uso contínuo.</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-2xl grayscale opacity-50">
             <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Checkup" className="w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
