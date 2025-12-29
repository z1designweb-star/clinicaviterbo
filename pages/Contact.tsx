
import React from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">Fale Conosco</h1>
          <p className="text-lg text-gray-600">
            Dúvidas, sugestões ou elogios? Utilize o formulário abaixo ou nossos canais diretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Seu nome aqui"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="exemplo@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all">
                  <option>Dúvida sobre Tratamento</option>
                  <option>Informação sobre Convênios</option>
                  <option>Elogio ou Reclamação</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Nossos Canais</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-1">E-mail</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-1">WhatsApp</p>
                    <a 
                      href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Telefone</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
                      className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-emerald-50 rounded-3xl">
              <h3 className="text-xl font-serif font-bold text-emerald-900 mb-4">Trabalhe Conosco</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quer fazer parte da equipe Clínica Viterbo? Envie seu currículo para nosso RH através do link abaixo.
              </p>
              <a 
                href="mailto:diretoria@clinicaviterbo.com.br"
                className="inline-block px-6 py-3 bg-white text-emerald-600 border border-emerald-200 font-bold rounded-xl hover:bg-emerald-100 transition-colors"
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
