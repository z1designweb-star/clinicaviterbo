
import React from 'react';
import { Mail, Phone, MessageCircle, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="pt-24 pb-10 bg-gray-50/30 min-h-screen overflow-x-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header - More compact */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-emerald-900 mb-2 md:mb-4 uppercase tracking-tight">Fale Conosco</h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Canais diretos para agendamentos ou acesso ao nosso portal de registros oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Occurrence Registration Area - Left Column */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden relative group flex flex-col">
            {/* Top Accent Gradient */}
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-500" />
            
            <div className="p-6 md:p-10 flex flex-col items-center text-center justify-center flex-grow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 border border-emerald-100">
                <FileText size={32} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-bold text-emerald-950 mb-3">Portal de Atendimento</h3>
              <p className="text-gray-500 mb-8 max-w-xs leading-relaxed text-xs md:text-sm">
                Canal oficial para registro de ocorrências, sugestões ou elogios via Google Forms.
              </p>

              <a 
                href="https://forms.gle/nS6Wp15UQ5eunj2x5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-200 active:scale-95 text-sm md:text-base"
              >
                Registro de Ocorrências
                <ChevronRight size={18} />
              </a>

              <div className="mt-8 flex items-center justify-center gap-2 text-[9px] text-emerald-600/40 font-bold uppercase tracking-widest">
                <Sparkles size={10} />
                Protocolo oficial
              </div>
            </div>
          </div>

          {/* Right Column: Contacts + Career */}
          <div className="flex flex-col gap-6">
            {/* Direct Channels - Compacted */}
            <div className="bg-white/60 p-5 md:p-8 rounded-[2rem] border border-emerald-100/50 flex-grow">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-emerald-950 mb-6 flex items-center gap-2">
                Canais Diretos
              </h2>
              <div className="space-y-4 md:space-y-6">
                {/* Email Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-black text-emerald-600/60 uppercase tracking-widest mb-0.5">E-mail</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="text-sm md:text-base font-bold text-emerald-950 hover:text-emerald-600 transition-colors block truncate"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-green-600 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-green-600/60 uppercase tracking-widest mb-0.5">WhatsApp</p>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base font-bold text-emerald-950 hover:text-green-600 transition-colors block"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-gray-900 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Call Center</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
                      className="text-sm md:text-base font-bold text-emerald-950 hover:text-emerald-600 transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Card - More compact */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-900 via-emerald-950 to-black rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2 py-0.5 bg-emerald-800/50 text-emerald-400 text-[9px] font-black rounded-md uppercase tracking-widest mb-2 border border-emerald-700/50">
                    Carreira
                  </span>
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-1">Trabalhe Conosco</h3>
                  <p className="text-[11px] md:text-xs text-emerald-100/70 max-w-xs leading-relaxed">
                    Envie seu currículo para nosso setor de talentos.
                  </p>
                </div>
                <div className="flex shrink-0">
                  <a 
                    href="mailto:diretoria@clinicaviterbo.com.br"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-emerald-900 text-[11px] font-black rounded-xl hover:bg-emerald-50 hover:scale-105 transition-all shadow-md active:scale-95 whitespace-nowrap"
                  >
                    <Mail size={14} />
                    Enviar Currículo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
