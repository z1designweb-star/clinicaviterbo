
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SPECIALTIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<{title: string, path: string, type: string}[]>([]);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Você é o assistente de navegação da Clínica Viterbo. 
      O usuário buscou por: "${searchQuery}". 
      Identifique as páginas ou especialidades mais relevantes.
      Especialidades disponíveis: ${SPECIALTIES.map(s => s.name).join(', ')}.
      Páginas principais: Institucional (/institucional), Agendamento (/agendamento), Unidades (/unidades), Contato (/contato).
      Retorne apenas um JSON (Array de objetos) no formato: [{"title": "Nome", "path": "/caminho", "type": "Categoria"}]`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const results = JSON.parse(response.text || "[]");
      setSearchResults(results);
    } catch (error) {
      console.error("Erro na busca:", error);
      // Fallback simples
      const fallback = SPECIALTIES
        .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(s => ({ title: s.name, path: `/especialidades/${s.slug}`, type: 'Especialidade' }));
      setSearchResults(fallback);
    } finally {
      setIsSearching(false);
    }
  };

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Institucional', path: '/institucional' },
    { label: 'Agende', path: '/agendamento' },
    { label: 'Especialidades', path: '/#especialidades', isAnchor: true, target: 'especialidades' },
    { label: 'Unidades', path: '/unidades' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-emerald-900 leading-none">Clínica Viterbo</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-600 font-bold mt-1">Acupuntura & Clínica da Dor</span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.target!)}
                    className="px-3 py-2 rounded-lg text-sm font-bold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="px-3 py-2 rounded-lg text-sm font-bold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="ml-4 p-2.5 bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-all border border-emerald-100"
              >
                <Search size={18} />
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-emerald-900">
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-emerald-900 hover:bg-emerald-50 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.target!)}
                    className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-emerald-950/98 backdrop-blur-lg animate-in fade-in duration-300">
          <button 
            onClick={() => { setIsSearchOpen(false); setSearchResults([]); setSearchQuery(''); }}
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>

          <div className="max-w-4xl mx-auto px-4 pt-32 h-full">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
                <Sparkles size={14} />
                Busca Inteligente Viterbo
              </div>
              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                <input 
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="O que você procura? (ex: acupuntura, dor na coluna...)"
                  className="w-full bg-transparent border-b-2 border-emerald-500/50 py-4 px-2 text-2xl md:text-4xl text-white outline-none placeholder:text-white/20 focus:border-emerald-500 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-0 bottom-4 text-emerald-400 disabled:opacity-50"
                  disabled={isSearching}
                >
                  {isSearching ? <Loader2 size={32} className="animate-spin" /> : <ArrowRight size={32} />}
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {searchResults.map((res, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate(res.path);
                  }}
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/50 transition-all text-left group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1 block">{res.type}</span>
                    <h4 className="text-xl font-bold text-white">{res.title}</h4>
                  </div>
                  <ArrowRight className="text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
