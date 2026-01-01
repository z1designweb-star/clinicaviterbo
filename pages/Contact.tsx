
import React from 'react';
import { Mail, Phone, MessageCircle, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="pt-36 pb-20 bg-gray-50/30 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-900 mb-4 md:mb-6 uppercase tracking-tight">Fale Conosco</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Estamos à disposição para ouvir você. Utilize nossos canais diretos para agendamentos ou acesse nosso portal de registros oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Occurrence Registration Area - Left Column */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden relative group flex flex-col h-full min-h-[500px]">
            {/* Top Accent Gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-500" />
            
            <div className="p-8 md:p-16 flex flex-col items-center text-center justify-center flex-grow">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center shadow-inner mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 border border-emerald-100">
                <FileText size={48} />
              </div>
              
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-emerald-950 mb-4">Portal de Atendimento</h3>
              <p className="text-gray-500 mb-10 max-w-sm leading-relaxed text-sm md:text-base">
                Para registrar ocorrências, sugestões, elogios ou reclamações, utilize nosso canal oficial de registro.
              </p>

              <a 
                href="https://forms.gle/nS6Wp15UQ5eunj2x5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-200 active:scale-95 text-lg"
              >
                Registro de Ocorrências
                <ChevronRight size={24} />
              </a>

              <div className="mt-12 flex items-center justify-center gap-2 text-[10px] text-emerald-600/40 font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                Protocolo oficial via Google Forms
              </div>
            </div>
          </div>

          {/* Right Column: Contacts + Career */}
          <div className="flex flex-col gap-10 md:gap-12">
            {/* Direct Channels */}
            <div className="bg-white/40 p-6 md:p-10 rounded-[2.5rem] border border-emerald-100/50">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-8 md:mb-10 flex items-center gap-3">
                Canais Diretos
              </h2>
              <div className="space-y-6 md:space-y-8">
                {/* Email Item */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <Mail size={28} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">E-mail</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="text-base md:text-lg font-bold text-emerald-950 hover:text-emerald-600 transition-colors block truncate"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-green-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-green-600 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-green-600/60 uppercase tracking-widest mb-1">WhatsApp Agendamento</p>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base md:text-xl font-bold text-emerald-950 hover:text-green-600 transition-colors block"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-gray-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Call Center</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
                      className="text-base md:text-xl font-bold text-emerald-950 hover:text-emerald-600 transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Card - Resized and Redimensioned */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-900 via-emerald-950 to-black rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
              <Sparkles className="absolute -top-4 -right-4 text-emerald-400 opacity-20 w-24 h-24 md:w-32 md:h-32 group-hover:rotate-12 transition-transform duration-700" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-emerald-800/50 text-emerald-400 text-[10px] font-black rounded-lg uppercase tracking-widest mb-6 border border-emerald-700/50">
                  Carreira
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Trabalhe Conosco</h3>
                <p className="text-sm md:text-base text-emerald-100/70 mb-10 leading-relaxed max-w-md">
                  Quer fazer parte da equipe de excelência da Clínica Viterbo? Envie seu currículo diretamente para o nosso setor de talentos.
                </p>
                <div className="flex">
                  <a 
                    href="mailto:diretoria@clinicaviterbo.com.br"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-900 text-sm font-black rounded-2xl hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl active:scale-95"
                  >
                    <Mail size={18} />
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
