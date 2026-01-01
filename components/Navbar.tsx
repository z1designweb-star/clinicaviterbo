
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
      setIsScrolled(window.scrollY > 20);
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
    { label: 'Nossos Médicos', path: '/medicos' },
    { label: 'Agendamentos', path: '/agendamento' },
    { label: 'Especialidades', path: '/#especialidades', isAnchor: true, target: 'especialidades' },
    { label: 'Convênios', path: '/#convenios', isAnchor: true, target: 'convenios' },
    { label: 'Unidades', path: '/unidades' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-1' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src={CLINIC_LOGO} alt="Clínica Viterbo" className="h-8 md:h-10 w-auto object-contain" />
                <div className="flex flex-col border-l border-emerald-200/50 pl-2">
                  <span className={`text-base md:text-lg font-serif font-bold transition-colors ${isScrolled ? 'text-emerald-950' : 'text-emerald-900'}`}>Clínica Viterbo</span>
                  <span className="text-[6px] uppercase tracking-[0.2em] text-emerald-600 font-bold">Acupuntura & Clínica da Dor</span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.target!)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:text-emerald-600 transition-all uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:text-emerald-600 transition-all uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-emerald-900 hover:bg-emerald-50 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.target!)}
                    className="block px-4 py-3 rounded-xl text-sm font-bold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-bold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
