
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CLINIC_LOGO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#' + targetId);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Institucional', path: '/institucional' },
    { label: 'Médicos', path: '/medicos' },
    { label: 'Agendamentos', path: '/agendamento' },
    { label: 'Especialidades', path: '/#especialidades', isAnchor: true, target: 'especialidades' },
    { label: 'Convênios', path: '/#convenios', isAnchor: true, target: 'convenios' },
    { label: 'Unidades', path: '/unidades' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-50 py-1' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img src={CLINIC_LOGO} alt="Clínica Viterbo" className="h-7 md:h-8 w-auto" />
              <div className="hidden sm:flex flex-col border-l border-emerald-100 pl-3">
                <span className={`text-sm md:text-base font-serif font-bold ${isScrolled ? 'text-emerald-950' : 'text-emerald-900'}`}>Clínica Viterbo</span>
                <span className="text-[7px] uppercase tracking-[0.2em] text-emerald-600/70 font-bold">Acupuntura & Clínica da Dor</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleAnchorClick(e, link.target!)}
                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 transition-all uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all uppercase tracking-wider ${
                    location.pathname === link.path ? 'text-emerald-700 bg-emerald-50/50' : 'text-gray-500 hover:text-emerald-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full animate-in slide-in-from-top-1 duration-200">
          <div className="px-4 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
