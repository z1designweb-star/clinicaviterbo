
import React from 'react';
// Fixed: Added MessageCircle to the import list from lucide-react
import { Mail, Phone, MessageSquare, MessageCircle, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="pt-36 pb-20 bg-gray-50/30 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-900 mb-4 md:mb-6">Fale Conosco</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Estamos à disposição para ouvir você. Utilize nossos canais diretos ou acesse nosso portal de registros oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
          {/* Occurrence Registration Area */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden relative group flex flex-col">
            {/* Top Accent Gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-500" />
            
            <div className="p-8 md:p-16 flex flex-col items-center text-center justify-center flex-grow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center shadow-inner mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <FileText size={40} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-4">Portal de Atendimento</h3>
              <p className="text-gray-500 mb-10 max-w-sm leading-relaxed">
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

              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-emerald-600/40 font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                Protocolo oficial via Google Forms
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-10 md:space-y-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-8 md:mb-10 text-center lg:text-left">Canais Diretos</h2>
              <div className="space-y-6 md:space-y-8">
                {/* Email Item */}
                <div className="flex items-start gap-4 md:gap-6 group max-w-full">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-emerald-600 rounded-xl md:rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">E-mail</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="text-base md:text-xl font-bold text-emerald-950 hover:text-emerald-600 transition-colors block truncate break-all md:break-normal"
                      title={CONTACT_INFO.email}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-green-600 rounded-xl md:rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-green-600 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <MessageCircle size={24} className="md:w-7 md:h-7" />
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
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-gray-900 rounded-xl md:rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300 border border-emerald-50">
                    <Phone size={24} className="md:w-7 md:h-7" />
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

            {/* Career Card */}
            <div className="p-6 md:p-10 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-[2rem] md:rounded-[2.5rem] shadow-xl text-white relative overflow-hidden mt-8 md:mt-0">
              <Sparkles className="absolute -top-2 -right-2 text-emerald-400 opacity-20 w-16 h-16 md:w-24 md:h-24" />
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 relative z-10">Trabalhe Conosco</h3>
              <p className="text-sm text-emerald-100/70 mb-6 md:mb-8 leading-relaxed relative z-10">
                Quer fazer parte da equipe de excelência da Clínica Viterbo? Envie seu currículo para nosso setor de talentos.
              </p>
              <a 
                href="mailto:diretoria@clinicaviterbo.com.br"
                className="inline-flex px-6 md:px-8 py-3 md:py-4 bg-white text-emerald-900 text-xs md:text-sm font-black rounded-xl md:rounded-2xl hover:bg-emerald-50 transition-all shadow-lg relative z-10"
              >
                Enviar Currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
