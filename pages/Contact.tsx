
import React from 'react';
import { Mail, Phone, MessageCircle, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="pt-24 pb-10 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-3 tracking-tight uppercase">Fale Conosco</h1>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
            Canais diretos para agendamentos ou acesso ao nosso portal de registros oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Portal Area */}
          <div className="bg-gray-50/50 rounded-2xl border border-emerald-50 overflow-hidden flex flex-col group">
            <div className="h-1 w-full bg-emerald-600/20" />
            <div className="p-8 md:p-10 flex flex-col items-center text-center justify-center flex-grow">
              <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center shadow-sm mb-6 border border-emerald-50">
                <FileText size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-emerald-950 mb-3">Portal de Atendimento</h3>
              <p className="text-gray-400 mb-8 max-w-xs text-[11px] md:text-xs leading-relaxed">
                Canal oficial para registro de ocorrências, sugestões ou elogios.
              </p>
              <a 
                href="https://forms.gle/nS6Wp15UQ5eunj2x5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-700 text-white text-[11px] font-black rounded-lg hover:bg-emerald-800 transition-all uppercase tracking-wider"
              >
                Registrar Ocorrência
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Contacts Area */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xs font-black text-emerald-900 uppercase tracking-widest mb-6">Canais Diretos</h2>
              <div className="space-y-5">
                {[
                  { icon: <Mail size={16} />, label: 'E-mail', val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, color: 'text-emerald-600' },
                  { icon: <MessageCircle size={16} />, label: 'WhatsApp', val: CONTACT_INFO.whatsapp, href: whatsappUrl, color: 'text-green-600' },
                  { icon: <Phone size={16} />, label: 'Call Center', val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`, color: 'text-gray-900' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-9 h-9 bg-gray-50 ${item.color} rounded-lg flex items-center justify-center shrink-0 border border-gray-100`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <a href={item.href} className="text-xs md:text-sm font-bold text-emerald-950 hover:text-emerald-600 truncate block">{item.val}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-emerald-950 rounded-2xl text-white relative overflow-hidden group">
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold mb-1">Trabalhe Conosco</h3>
                  <p className="text-[10px] text-emerald-100/50 uppercase tracking-tight">Envie seu currículo para talentos</p>
                </div>
                <a 
                  href="mailto:diretoria@clinicaviterbo.com.br"
                  className="px-5 py-2.5 bg-white text-emerald-900 text-[10px] font-black rounded-lg hover:bg-emerald-50 transition-all uppercase tracking-wider whitespace-nowrap"
                >
                  Enviar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
