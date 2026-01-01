
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SPECIALTIES, CONTACT_INFO } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'model', text: 'Olá! Como posso ajudar?' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Assistente oficial da Clínica Viterbo (Salvador). Seja breve e acolhedor. Não dê diagnósticos. WhatsApp: ${CONTACT_INFO.whatsapp}.`,
        }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Desculpe, tente novamente.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: 'Erro na conexão. Use o WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-[85vw] sm:w-[320px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-50 animate-in slide-in-from-bottom-2 duration-200">
          <div className="bg-emerald-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Assistente</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2.5 rounded-xl text-[12px] max-w-[90%] ${
                  msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white border border-emerald-50 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <Loader2 size={14} className="animate-spin text-emerald-600 mx-auto" />}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Sua dúvida..."
              className="flex-grow bg-gray-50 border-none rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-emerald-200"
            />
            <button type="submit" className="text-emerald-600 hover:text-emerald-800"><Send size={16} /></button>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
