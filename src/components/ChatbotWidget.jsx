import { useState } from 'react';
import { Sparkles, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between text-gray-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                <Sparkles size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Klyro AI</h3>
                <p className="text-xs text-gray-500 font-medium">Online & Ready to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-80 overflow-y-auto flex flex-col gap-4 bg-gray-50/50">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <Sparkles size={14} className="text-secondary" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-sm text-gray-700">
                Hi there! 👋 I'm Klyro AI. How can I help you with your English learning or API integration today?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-md">
                <Send size={14} />
              </button>
            </div>
          </div>
          
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 ${isOpen ? 'bg-gray-100 text-gray-600' : 'bg-white text-secondary'}`}
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>
    </div>
  );
}
