"use client";

import { useState, useRef, useEffect } from "react";
import { XMarkIcon, PaperAirplaneIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { SparklesIcon as SparklesSolidIcon } from "@heroicons/react/24/solid";

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", text: "Chào bạn! Mình là trợ lý AI của Klyro. Mình có thể giúp gì cho việc học tiếng Trung của bạn hôm nay?", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user"
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // Dummy AI Response
        setTimeout(() => {
            const botResponses = [
                "Câu hỏi rất hay! Để mình giải thích thêm nhé...",
                "Trong tiếng Trung, trường hợp này bạn nên dùng cấu trúc sau...",
                "Bạn có muốn mình đưa ra vài ví dụ cụ thể không?",
                "Tuyệt vời! Phát âm phần này rất quan trọng, bạn nhớ lưu ý thanh điệu nhé.",
                "Theo giáo trình HSK, từ này nằm ở cấp độ HSK 3."
            ];
            
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            
            const newBotMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: "bot"
            };
            
            setMessages(prev => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-gray-200 mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
                    
                    {/* Header */}
                    <div className="bg-[#D95375] p-4 text-white flex justify-between items-center shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                                <SparklesIcon className="w-6 h-6 text-yellow-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Klyro AI Tutor</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-xs text-pink-100 font-medium">Trực tuyến</span>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4 custom-scrollbar">
                        <div className="text-center my-2">
                            <span className="text-xs text-gray-400 bg-gray-200 px-3 py-1 rounded-full">Hôm nay</span>
                        </div>
                        
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${
                                    msg.sender === "user" 
                                    ? "bg-[#D95375] text-white rounded-tr-sm" 
                                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
                                }`}>
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm flex gap-1 items-center h-[44px]">
                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2 relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Hỏi AI về tiếng Trung..."
                                className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#D95375]/50 transition-all border border-transparent focus:border-[#D95375] focus:bg-white"
                            />
                            <button 
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 p-2 bg-[#D95375] text-white rounded-full hover:bg-[#b63d58] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                <PaperAirplaneIcon className="w-4 h-4 -rotate-45 ml-0.5 mb-0.5" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none relative group ${
                    isOpen ? 'bg-gray-800 rotate-90' : 'bg-gradient-to-tr from-[#D95375] to-[#c24263] hover:shadow-[#D95375]/50'
                }`}
            >
                {/* Ping animation effect */}
                {!isOpen && (
                    <span className="absolute w-full h-full rounded-full bg-[#D95375] opacity-40 animate-ping"></span>
                )}
                
                {isOpen ? (
                    <XMarkIcon className="w-7 h-7 transition-transform -rotate-90" />
                ) : (
                    <SparklesSolidIcon className="w-7 h-7 relative z-10" />
                )}
            </button>
        </div>
    );
}
