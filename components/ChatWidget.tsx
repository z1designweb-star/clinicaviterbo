
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
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Você é o assistente virtual da Clínica Viterbo, especializada em Acupuntura Médica e Clínica da Dor em Salvador/BA.
          Fundada em 2002 pelo Dr. Walter Viterbo.
          Unidades: Salvador Trade, Boulevard Side, Itaigara, Hangar Park, Comércio e Dual Medical (Lauro de Freitas).
          Especialidades: ${SPECIALTIES.map(s => s.name).join(', ')}.
          Convênios: ${INSURANCES.join(', ')}.
          Contato: WhatsApp ${CONTACT_INFO.whatsapp}, Telefone ${CONTACT_INFO.phone}.
          Regras: 
          1. Seja cordial e empático.
          2. Não dê diagnósticos médicos, apenas informe sobre especialidades e tratamentos da clínica.
          3. Se o usuário quiser agendar, oriente-o a usar o botão de Agendamento ou entrar em contato via WhatsApp.
          4. Responda sempre em Português do Brasil de forma concisa.`,
        }
      });

      const response = await chat.sendMessage({ message: userMessage });
      const botText = response.text || "Desculpe, não consegui processar sua solicitação no momento.";
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Ops, tive um problema técnico. Você pode tentar novamente ou nos chamar no WhatsApp?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-emerald-900 p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                  <Bot size={22} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-emerald-900 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Assistente Viterbo</h3>
                <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMessages([{ role: 'model', text: 'Olá! Sou o assistente virtual da Clínica Viterbo. Como posso ajudar você hoje?' }])}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-emerald-300"
                title="Limpar chat"
              >
                <Trash2 size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-800 text-white'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <Loader2 size={18} className="animate-spin text-emerald-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-all shadow-md active:scale-95"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-90 ${
          isOpen ? 'bg-white text-emerald-900 rotate-90 scale-90' : 'bg-emerald-600 text-white hover:bg-emerald-700 scale-100'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white">
            1
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
