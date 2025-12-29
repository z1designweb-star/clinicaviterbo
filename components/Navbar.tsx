
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

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
    { label: 'Agende sua Consulta', path: '/agendamento' },
    { label: 'Especialidades', path: '/#especialidades', isAnchor: true, target: 'especialidades' },
    { label: 'Convênios', path: '/#convenios', isAnchor: true, target: 'convenios' },
    { label: 'Unidades', path: '/unidades' },
    { label: 'Fale Conosco', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col">
              <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-emerald-900' : 'text-emerald-900 md:text-white'}`}>Clínica Viterbo</span>
              <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-emerald-600' : 'text-emerald-600 md:text-emerald-100'}`}>Acupuntura & Clínica da Dor</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.target!)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-700 md:text-white hover:text-emerald-200'}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-700 md:text-white hover:text-emerald-200'}`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleAnchorClick(e, link.target!)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
