
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Trash2, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SPECIALTIES, INSURANCES, CONTACT_INFO } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da Clínica Viterbo. Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key não configurada. Verifique as variáveis de ambiente no Vercel.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Você é o assistente virtual da Clínica Viterbo (Salvador/BA).
          Especialidades: Acupuntura Médica, Clínica da Dor, Ortopedia, Nutrição, Psicologia, Fisioterapia, RPG, Massoterapia, Reumatologia, Fisiatria.
          Fundador: Dr. Walter Viterbo.
          Unidades: Salvador Trade, Boulevard Side, Itaigara, Hangar Park, Comércio e Dual Medical (Lauro de Freitas).
          WhatsApp: ${CONTACT_INFO.whatsapp}.
          Regras: Seja breve, cordial e nunca dê diagnósticos médicos. Encaminhe para agendamento via WhatsApp se necessário.`,
        }
      });

      const response = await chat.sendMessage({ message: userMessage });
      const botText = response.text || "Desculpe, não consegui processar sua mensagem agora.";
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Estou com dificuldades técnicas para responder agora. Por favor, tente novamente em instantes ou nos chame no WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-emerald-900 p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Assistente Viterbo</h3>
                <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setMessages([{ role: 'model', text: 'Olá! Como posso ajudar?' }])} className="p-2 text-emerald-300 hover:bg-white/10 rounded-full">
                <Trash2 size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={22} />
              </button>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl text-sm max-w-[85%] shadow-sm ${
                  msg.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm animate-pulse">
                  <Loader2 size={16} className="animate-spin text-emerald-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500"
            />
            <button type="submit" disabled={isLoading} className="bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 disabled:opacity-50">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen ? 'bg-white text-emerald-900 rotate-90 scale-90' : 'bg-emerald-600 text-white hover:bg-emerald-700'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;
