"use client";

import { useState } from "react";
import Link from "next/link";
import { XMarkIcon, SpeakerWaveIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function FlashcardDetail() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mock data for flashcards
    const flashcards = [
        { id: 1, hanzi: "你好", pinyin: "nǐ hǎo", meaning: "Xin chào", example: "你好！很高兴认识你。(Xin chào! Rất vui được gặp bạn.)" },
        { id: 2, hanzi: "谢谢", pinyin: "xiè xiè", meaning: "Cảm ơn", example: "谢谢你的帮助。(Cảm ơn sự giúp đỡ của bạn.)" },
        { id: 3, hanzi: "再见", pinyin: "zài jiàn", meaning: "Tạm biệt", example: "明天见，再见！(Ngày mai gặp nhé, tạm biệt!)" },
        { id: 4, hanzi: "对不起", pinyin: "duì bù qǐ", meaning: "Xin lỗi", example: "对不起，我迟到了。(Xin lỗi, tôi đến muộn.)" },
    ];

    const currentCard = flashcards[currentIndex];

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        // Small timeout to allow flip animation to finish before changing data
        setTimeout(() => {
            if (currentIndex < flashcards.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0); // loop back for demo
            }
        }, 150);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Top Navigation Bar */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4 flex-1">
                    <Link href="/vocabulary" className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                        <XMarkIcon className="w-6 h-6 text-gray-500" />
                    </Link>
                    <div>
                        <h1 className="font-bold text-gray-900">150 từ vựng HSK 1</h1>
                        <p className="text-xs text-gray-500">Đang học • {currentIndex + 1} / {flashcards.length}</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="hidden md:block flex-1 max-w-md mx-8">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                            className="bg-[#F26076] h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex-1 flex justify-end">
                    <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                        <EllipsisHorizontalIcon className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
            </header>

            {/* Main Study Area */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 pb-24 md:pb-6 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#F26076]/5 to-orange-300/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

                {/* Flashcard Container - preserves 3D perspective */}
                <div 
                    className="relative w-full max-w-xl h-[450px] md:h-[500px] perspective-1000 z-10 cursor-pointer group"
                    onClick={handleFlip}
                >
                    {/* The Card */}
                    <div 
                        className={`w-full h-full transition-transform duration-500 preserve-3d relative rounded-[3rem] shadow-xl hover:shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`}
                    >
                        {/* Front Face */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-[3rem] border border-gray-100 flex flex-col items-center justify-center p-10">
                            <button 
                                onClick={(e) => { e.stopPropagation(); /* Play audio */ }}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors"
                            >
                                <SpeakerWaveIcon className="w-6 h-6" />
                            </button>
                            <h2 className="text-[120px] font-black text-gray-800 leading-none drop-shadow-sm mb-4">{currentCard.hanzi}</h2>
                            <p className="text-gray-400 font-medium">Nhấn vào thẻ để lật</p>
                        </div>

                        {/* Back Face */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-[3rem] border border-gray-100 flex flex-col items-center justify-center p-10 rotate-y-180">
                            <button 
                                onClick={(e) => { e.stopPropagation(); /* Play audio */ }}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors"
                            >
                                <SpeakerWaveIcon className="w-6 h-6" />
                            </button>
                            
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">{currentCard.pinyin}</h3>
                            <h4 className="text-2xl font-bold text-[#F26076] mb-8">{currentCard.meaning}</h4>
                            
                            <div className="w-full h-px bg-gray-100 mb-8"></div>
                            
                            <div className="w-full text-left bg-gray-50 p-6 rounded-2xl">
                                <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Ví dụ</p>
                                <p className="text-lg text-gray-700 leading-relaxed">{currentCard.example}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interaction Buttons - Only show when flipped */}
                <div className={`mt-10 transition-all duration-300 transform ${isFlipped ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
                    <p className="text-center text-sm font-medium text-gray-500 mb-4">Bạn nhớ từ này chứ?</p>
                    <div className="flex items-center gap-4 md:gap-6">
                        <button 
                            onClick={handleNext}
                            className="flex flex-col items-center justify-center w-24 md:w-32 py-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm font-bold border border-red-100 group"
                        >
                            <span className="text-lg">Chưa</span>
                            <span className="text-xs font-normal opacity-70 group-hover:opacity-100 mt-1">Học lại ngay</span>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="flex flex-col items-center justify-center w-24 md:w-32 py-4 bg-orange-50 text-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-sm font-bold border border-orange-100 group"
                        >
                            <span className="text-lg">Khó</span>
                            <span className="text-xs font-normal opacity-70 group-hover:opacity-100 mt-1">Lặp lại 1h</span>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="flex flex-col items-center justify-center w-24 md:w-32 py-4 bg-green-50 text-green-500 rounded-2xl hover:bg-green-500 hover:text-white transition-all shadow-sm font-bold border border-green-100 group"
                        >
                            <span className="text-lg">Dễ</span>
                            <span className="text-xs font-normal opacity-70 group-hover:opacity-100 mt-1">Lặp lại 1d</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
