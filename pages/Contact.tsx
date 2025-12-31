
import React from 'react';
import { Mail, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="pt-36 pb-20 bg-gray-50/30 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-900 mb-4 md:mb-6">Fale Conosco</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Dúvidas, sugestões ou elogios? Utilize o formulário abaixo para iniciar um atendimento via WhatsApp ou use nossos canais diretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Form Area */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden relative group">
            {/* Top Accent Gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-500" />
            
            <div className="p-6 md:p-12">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
                  <MessageSquare size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-emerald-950">Envie uma Mensagem</h3>
                  <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest">Retorno imediato via WhatsApp</p>
                </div>
              </div>

              <div className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-black text-emerald-900/50 uppercase tracking-widest mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium text-sm"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-black text-emerald-900/50 uppercase tracking-widest mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium text-sm"
                      placeholder="Seu melhor e-mail"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-black text-emerald-900/50 uppercase tracking-widest mb-2">Assunto</label>
                  <div className="relative">
                    <select className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium appearance-none text-sm">
                      <option>Dúvida sobre Tratamento</option>
                      <option>Informação sobre Convênios</option>
                      <option>Elogio ou Reclamação</option>
                      <option>Outros</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400">
                      <Sparkles size={14} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-black text-emerald-900/50 uppercase tracking-widest mb-2">Mensagem (opcional)</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium resize-none text-sm"
                    placeholder="Descreva sua solicitação..."
                  ></textarea>
                </div>
                
                <div className="pt-2 md:pt-4">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 md:py-5 bg-emerald-600 text-white font-black rounded-xl md:rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-200 active:scale-95 text-sm md:text-base"
                  >
                    <span>Iniciar Atendimento</span>
                    <Send size={18} />
                  </a>
                  <div className="mt-6 flex items-center justify-center gap-2 text-[9px] md:text-[10px] text-emerald-600/50 font-bold uppercase tracking-widest">
                    <Sparkles size={12} />
                    Conexão segura via WhatsApp oficial
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-10 md:space-y-12 py-4 md:py-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 mb-6 md:mb-8">Canais Diretos</h2>
              <div className="space-y-6 md:space-y-8">
                {/* Email Item */}
                <div className="flex items-start gap-4 md:gap-6 group max-w-full">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-emerald-600 rounded-xl md:rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
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
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-green-600 rounded-xl md:rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <MessageSquare size={24} className="md:w-7 md:h-7" />
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
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-gray-900 rounded-xl md:rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300">
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
            <div className="p-6 md:p-10 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-[2rem] md:rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
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
