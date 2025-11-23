import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage, Sender } from '../types';
import { GenerateContentResponse } from '@google/genai';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: '¡Hola! Soy el Capitán Cometa 👨‍🚀. ¿Qué quieres saber sobre el espacio hoy?',
      sender: Sender.Bot,
      timestamp: Date.now()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: Sender.User,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const streamResult = await sendMessageToGemini(userMsg.text);
      
      // Create a placeholder message for the bot response
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMsgId,
        text: '',
        sender: Sender.Bot,
        timestamp: Date.now()
      }]);

      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text;
        if (textChunk) {
            fullText += textChunk;
            setMessages(prev => prev.map(msg => 
                msg.id === botMsgId ? { ...msg, text: fullText } : msg
            ));
        }
      }
    } catch (error) {
      console.error("Error chatting with Gemini:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "¡Houston, tenemos un problema! Mi radio está fallando. Intenta de nuevo.",
        sender: Sender.Bot,
        timestamp: Date.now()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
        {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-space-light border border-white/20 shadow-2xl rounded-2xl w-80 sm:w-96 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen ? 'opacity-100 scale-100 mb-4' : 'opacity-0 scale-95 h-0 mb-0'
        }`}
        style={{ maxHeight: '600px', height: '70vh' }}
      >
        {/* Chat Header */}
        <div className="bg-purple-700 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl bg-white rounded-full p-1">👨‍🚀</span>
            <div>
              <h3 className="font-bold text-white">Capitán Cometa</h3>
              <p className="text-xs text-purple-200">Tu guía espacial IA</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white"
            aria-label="Cerrar chat"
          >
            ✕
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-900/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === Sender.User ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm md:text-base ${
                  msg.sender === Sender.User 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-gray-700 text-gray-100 rounded-bl-none border border-gray-600'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-gray-700 text-gray-300 rounded-2xl rounded-bl-none px-4 py-2 text-sm border border-gray-600 flex gap-1">
                 <span className="animate-bounce">●</span>
                 <span className="animate-bounce delay-100">●</span>
                 <span className="animate-bounce delay-200">●</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-space-dark border-t border-white/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pregunta sobre la luna..."
              className="flex-grow bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-4 shadow-lg shadow-purple-500/40 transform transition-transform hover:scale-110 flex items-center justify-center gap-2 ${isOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}
        aria-label="Abrir chat"
      >
        <span className="text-3xl">👨‍🚀</span>
        <span className="font-bold hidden md:inline pr-2">Chat Espacial</span>
      </button>
    </div>
  );
};