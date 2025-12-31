
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, Zap, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const apiKey = process.env.API_KEY || '';
  const isApiConnected = apiKey.length > 0;
  const apiKeySuffix = isApiConnected ? apiKey.slice(-4) : '----';

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white">Clínica Viterbo</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Referência em Salvador no tratamento da dor e acupuntura médica. 
              Compromisso com o seu bem-estar através de 6 unidades integradas.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.instagram} className="hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href={CONTACT_INFO.facebook} className="hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Úteis</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacidade" className="text-slate-400 hover:text-white text-sm transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="text-slate-400 hover:text-white text-sm transition-colors">Envie seu Curriculum</Link>
              </li>
              <li>
                <Link to="/contato" className="text-slate-400 hover:text-white text-sm transition-colors">Fale Conosco</Link>
              </li>
              <li>
                <Link to="/unidades" className="text-slate-400 hover:text-white text-sm transition-colors">Nossas Unidades</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Contato Call Center</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Mail className="text-emerald-400 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-white">{CONTACT_INFO.email}</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-emerald-400 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-medium">Telefone</p>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="text-slate-400 hover:text-white">{CONTACT_INFO.phone}</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="text-emerald-400 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-medium">WhatsApp</p>
                  <a href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="text-slate-400 hover:text-white">{CONTACT_INFO.whatsapp}</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-medium">Localização</p>
                  <p className="text-slate-400">Salvador - Bahia (6 Unidades)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Status Section */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            {isApiConnected ? (
              <>
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-emerald-400 fill-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">API Conectada</span>
                  <span className="text-[10px] text-slate-500 font-mono">ID: ****{apiKeySuffix}</span>
                </div>
              </>
            ) : (
              <>
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-red-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">IA Offline (Configurar Vercel)</span>
                </div>
              </>
            )}
          </div>
          
          <div className="text-slate-500 text-[10px] text-center md:text-right font-medium uppercase tracking-wider">
            Responsável Técnico: Dr. Walter Viterbo (CRM 11188-BA)
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-[10px] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Clínica Viterbo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
