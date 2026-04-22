"use client";

import { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon, SpeakerWaveIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Listening() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState<number | null>(null);

    const podcasts = [
        { id: 1, title: "Đoạn hội thoại giới thiệu bản thân", level: "HSK 1", duration: "2:15", topic: "Giao tiếp", bg: "from-blue-400 to-[#D95375]" },
        { id: 2, title: "Cách gọi món trong nhà hàng", level: "HSK 2", duration: "4:30", topic: "Đời sống", bg: "from-green-400 to-green-600" },
        { id: 3, title: "Trải nghiệm du lịch Bắc Kinh", level: "HSK 3", duration: "6:45", topic: "Du lịch", bg: "from-orange-400 to-orange-600" },
        { id: 4, title: "Kinh nghiệm phỏng vấn xin việc", level: "HSK 4", duration: "8:20", topic: "Công sở", bg: "from-purple-400 to-purple-600" },
        { id: 5, title: "Thảo luận về văn hóa trà Trung Hoa", level: "HSK 5", duration: "12:10", topic: "Văn hóa", bg: "from-red-400 to-red-600" },
        { id: 6, title: "Bản tin kinh tế buổi sáng", level: "HSK 6", duration: "5:50", topic: "Tin tức", bg: "from-teal-400 to-[#D95375]" },
    ];

    const playAudio = (id: number) => {
        if (currentAudio === id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentAudio(id);
            setIsPlaying(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />

            <main className="flex-1 pb-32">
                {/* Hero Section */}
                <section className="bg-white border-b border-gray-100 pt-16 pb-12">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#D95375] font-medium text-sm mb-6">
                            <SparklesIcon className="w-4 h-4" />
                            Luyện nghe chủ động & thụ động
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Podcast <span className="text-[#D95375]">Tiếng Trung</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tắm ngôn ngữ mỗi ngày với hàng trăm bài nghe được phân loại theo trình độ HSK. Phát âm chuẩn bản xứ, kèm phụ đề song ngữ.
                        </p>
                    </div>
                </section>

                {/* List Section */}
                <section className="py-12">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Bài nghe mới nhất</h2>
                            <div className="flex gap-2">
                                {['Tất cả', 'HSK 1-2', 'HSK 3-4', 'HSK 5-6'].map(filter => (
                                    <button key={filter} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'Tất cả' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {podcasts.map((podcast) => (
                                <div 
                                    key={podcast.id} 
                                    className={`bg-white rounded-2xl p-4 flex items-center gap-6 shadow-sm border transition-all hover:shadow-md cursor-pointer ${currentAudio === podcast.id ? 'border-[#e87391] ring-1 ring-[#e87391]' : 'border-gray-100'}`}
                                    onClick={() => playAudio(podcast.id)}
                                >
                                    {/* Cover Image Placeholder */}
                                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${podcast.bg} flex items-center justify-center flex-shrink-0 shadow-inner`}>
                                        {currentAudio === podcast.id && isPlaying ? (
                                            <div className="flex gap-1 items-end h-6">
                                                <div className="w-1.5 bg-white rounded-full animate-[bounce_1s_infinite]"></div>
                                                <div className="w-1.5 bg-white rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
                                                <div className="w-1.5 bg-white rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
                                            </div>
                                        ) : (
                                            <PlayIcon className="w-10 h-10 text-white opacity-80" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 font-bold text-xs rounded uppercase tracking-wider">{podcast.topic}</span>
                                        </div>
                                        <h3 className={`text-lg font-bold mb-2 transition-colors ${currentAudio === podcast.id ? 'text-[#D95375]' : 'text-gray-900'}`}>
                                            {podcast.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                            <span className="flex items-center gap-1.5"><ChartBarIcon className="w-4 h-4" /> {podcast.level}</span>
                                            <span className="flex items-center gap-1.5"><ClockIcon className="w-4 h-4" /> {podcast.duration}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <button 
                                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentAudio === podcast.id ? 'bg-[#D95375] text-white shadow-lg shadow-[#D95375]/30' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900'}`}
                                        >
                                            {currentAudio === podcast.id && isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6 ml-1" />}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Sticky Audio Player */}
            <div className={`fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-transform duration-500 z-50 ${currentAudio ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    {currentAudio && (
                        <>
                            <div className="flex items-center gap-4 flex-1 w-full">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${podcasts.find(p => p.id === currentAudio)?.bg} flex items-center justify-center flex-shrink-0`}>
                                    <SpeakerWaveIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="truncate">
                                    <p className="text-sm font-bold text-gray-900 truncate">{podcasts.find(p => p.id === currentAudio)?.title}</p>
                                    <p className="text-xs text-gray-500">{podcasts.find(p => p.id === currentAudio)?.level}</p>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center w-full">
                                <div className="flex items-center gap-6 mb-2">
                                    <button className="text-gray-400 hover:text-gray-900 transition-colors"><BackwardIcon className="w-6 h-6" /></button>
                                    <button 
                                        className="w-12 h-12 rounded-full bg-[#D95375] text-white flex items-center justify-center hover:bg-[#b63d58] shadow-lg shadow-[#D95375]/30 transition-transform hover:scale-105"
                                        onClick={() => setIsPlaying(!isPlaying)}
                                    >
                                        {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6 ml-1" />}
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-900 transition-colors"><ForwardIcon className="w-6 h-6" /></button>
                                </div>
                                <div className="w-full flex items-center gap-3">
                                    <span className="text-xs font-medium text-gray-500">0:45</span>
                                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
                                        <div className="h-full bg-[#D95375] rounded-full w-1/3 relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow border border-gray-200"></div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">{podcasts.find(p => p.id === currentAudio)?.duration}</span>
                                </div>
                            </div>

                            <div className="flex-1 flex justify-end items-center gap-4 hidden md:flex">
                                <button className="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-200">1.0x</button>
                                <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <SpeakerWaveIcon className="w-6 h-6" />
                                </button>
                                <div className="w-24 h-1.5 bg-gray-200 rounded-full">
                                    <div className="h-full bg-gray-400 rounded-full w-2/3"></div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
