
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const LOGO_URL = "https://i.postimg.cc/85zXmK9H/logo-viterbo.png";

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
    { label: 'Agende', path: '/agendamento' },
    { label: 'Especialidades', path: '/#especialidades', isAnchor: true, target: 'especialidades' },
    { label: 'Unidades', path: '/unidades' },
    { label: 'Fale Conosco', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={LOGO_URL} alt="Clínica Viterbo" className={`${isScrolled ? 'h-12' : 'h-14'} w-auto transition-all duration-300`} />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.target!)}
                    className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
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
              className="p-2 rounded-md text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleAnchorClick(e, link.target!)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/agendamento"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
