
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-lg font-serif font-bold">Clínica Viterbo</h2>
            <p className="text-[11px] text-emerald-100/60 leading-relaxed">
              Referência na Bahia no tratamento da dor. 6 unidades dedicadas ao seu bem-estar.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-4">Navegação</h3>
            <ul className="space-y-2 text-[11px] text-emerald-100/70">
              <li><Link to="/institucional" className="hover:text-white">Institucional</Link></li>
              <li><Link to="/medicos" className="hover:text-white">Corpo Clínico</Link></li>
              <li><Link to="/unidades" className="hover:text-white">Nossas Unidades</Link></li>
              <li><Link to="/privacidade" className="hover:text-white">Privacidade</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-4">Central de Atendimento</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-emerald-100/70">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-500" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-500" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-emerald-500" />
                <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-500" />
                <span>Bahia (6 Unidades)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[9px] text-emerald-100/30 uppercase tracking-[0.2em]">
            Resp. Técnico: Dr. Walter Viterbo (CRM 11188-BA)
          </div>
          <p className="text-[9px] text-emerald-100/30 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Clínica Viterbo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
