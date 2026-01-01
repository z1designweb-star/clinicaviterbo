
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Trash2, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SPECIALTIES, CONTACT_INFO } from '../constants';

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
  const [error, setError] = useState<string | null>(null);
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
    setError(null);

    try {
      // Fixed: Strictly following initialization guidelines by passing apiKey directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Você é o assistente virtual oficial da Clínica Viterbo (Salvador/BA).
          Especialidades: ${SPECIALTIES.map(s => s.name).join(', ')}.
          Fundador: Dr. Walter Viterbo (fundada em 2002).
          Unidades: Salvador Trade, Boulevard Side, Itaigara, Hangar Park, Comércio e Dual Medical (Lauro de Freitas).
          WhatsApp: ${CONTACT_INFO.whatsapp}.
          Regras: 
          1. Seja profissional, acolhedor e breve.
          2. NUNCA forneça diagnósticos ou prescrições.
          3. Incentive o agendamento via WhatsApp (${CONTACT_INFO.whatsapp}) para casos específicos.
          4. Responda em Português do Brasil.`,
        }
      });

      const botText = response.text;
      if (!botText) throw new Error("Resposta vazia da IA");
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (err: any) {
      console.error('Chat Error:', err);
      let errorMsg = 'Desculpe, tive um problema ao processar sua mensagem.';
      
      if (!process.env.API_KEY) {
        errorMsg = 'A chave de API não foi configurada no Vercel (Environment Variables).';
      } else if (err.message?.includes('403') || err.message?.includes('API_KEY_INVALID')) {
        errorMsg = 'Chave de API inválida ou sem permissão.';
      }

      setError(errorMsg);
      setMessages(prev => [...prev, { role: 'model', text: 'Estou com dificuldades técnicas. Por favor, tente novamente ou use nosso WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-emerald-900 p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center border border-emerald-500/30">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Assistente Viterbo</h3>
                <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold">Inteligência Artificial</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMessages([{ role: 'model', text: 'Olá! Como posso ajudar?' }])} 
                className="p-2 text-emerald-300 hover:bg-white/10 rounded-full transition-colors"
                title="Limpar Conversa"
              >
                <Trash2 size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="bg-red-50 p-3 flex items-start gap-2 border-b border-red-100">
              <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-red-600 font-medium leading-tight">{error}</p>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`p-3 rounded-2xl text-sm max-w-[85%] shadow-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                  <Loader2 size={16} className="animate-spin text-emerald-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
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
              className="bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-all active:scale-95 shadow-lg shadow-emerald-100"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-white text-emerald-900 rotate-90 scale-90' : 'bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
      </button>
    </div>
  );
};

export default ChatWidget;
