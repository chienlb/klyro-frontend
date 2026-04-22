"use client";

import { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { 
    ClockIcon, 
    DocumentTextIcon, 
    TrophyIcon, 
    UsersIcon, 
    CheckCircleIcon,
    PlayCircleIcon,
    ArrowPathIcon,
    AcademicCapIcon
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

const HSK_LEVELS = [
    { id: 1, name: 'HSK 1', vocab: 150, time: 40 },
    { id: 2, name: 'HSK 2', vocab: 300, time: 55 },
    { id: 3, name: 'HSK 3', vocab: 600, time: 90 },
    { id: 4, name: 'HSK 4', vocab: 1200, time: 105 },
    { id: 5, name: 'HSK 5', vocab: 2500, time: 125 },
    { id: 6, name: 'HSK 6', vocab: 5000, time: 140 },
];

const MOCK_TESTS = [
    { id: 1, title: 'Đề thi thật HSK 3 - Mã đề H31001', type: 'Đề thi thật', tags: ['Nghe', 'Đọc', 'Viết'], users: 15420, status: 'completed', score: 285 },
    { id: 2, title: 'Đề thi thật HSK 3 - Mã đề H31002', type: 'Đề thi thật', tags: ['Nghe', 'Đọc', 'Viết'], users: 12300, status: 'in-progress', score: null },
    { id: 3, title: 'Đề thi thật HSK 3 - Mã đề H31003', type: 'Đề thi thật', tags: ['Nghe', 'Đọc', 'Viết'], users: 10100, status: 'not-started', score: null },
    { id: 4, title: 'Đề thi mô phỏng Klyro - HSK 3 Số 1', type: 'Đề mô phỏng', tags: ['Khó', 'Sát thực tế'], users: 8500, status: 'not-started', score: null },
    { id: 5, title: 'Đề thi mô phỏng Klyro - HSK 3 Số 2', type: 'Đề mô phỏng', tags: ['Chuẩn form', 'Mới cập nhật'], users: 6200, status: 'not-started', score: null },
];

export default function MockTest() {
    const [activeLevel, setActiveLevel] = useState(3);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />

            <main className="flex-grow">
                {/* Hero Banner */}
                <section className="bg-[#D95375] py-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -left-20 -top-20 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="text-white max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 text-sm font-medium mb-6 shadow-sm">
                                <AcademicCapIcon className="w-5 h-5" />
                                <span>Hệ thống thi thử HSK Chuẩn Quốc Tế</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                                Chinh Phục HSK Với Kho Đề Thi Khổng Lồ
                            </h1>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed">
                                Luyện tập với hàng trăm đề thi thật và đề mô phỏng sát với cấu trúc đề thi mới nhất. Đánh giá chính xác năng lực, phân tích điểm yếu và sẵn sàng 100% cho kỳ thi thực tế.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <DocumentTextIcon className="w-6 h-6 text-[#fdf2f4]" />
                                    <span className="font-medium">+500 Đề thi</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="w-6 h-6 text-[#fdf2f4]" />
                                    <span className="font-medium">+50,000 Lượt thi</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrophyIcon className="w-6 h-6 text-[#fdf2f4]" />
                                    <span className="font-medium">Chấm điểm AI</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hidden lg:block">
                            {/* Decorative Elements */}
                            <div className="relative w-72 h-72 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 p-6 shadow-2xl flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-[#c24263] rounded-xl flex items-center justify-center shadow-inner">
                                        <span className="text-white font-bold text-xl">HSK</span>
                                    </div>
                                    <div className="text-white text-right">
                                        <div className="text-3xl font-bold">285</div>
                                        <div className="text-xs text-white/70">Điểm cao nhất</div>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-400 w-11/12 rounded-full"></div>
                                    </div>
                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 w-4/5 rounded-full"></div>
                                    </div>
                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#fdf2f4] w-3/4 rounded-full"></div>
                                    </div>
                                </div>
                                
                                <button className="w-full py-3 bg-white text-[#D95375] rounded-xl font-bold shadow-md">
                                    Tiếp tục làm bài
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-white border-b border-gray-100 sticky top-[72px] z-40 shadow-sm">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Chọn cấp độ HSK</h2>
                        <div className="flex flex-wrap gap-4">
                            {HSK_LEVELS.map(level => (
                                <button 
                                    key={level.id}
                                    onClick={() => setActiveLevel(level.id)}
                                    className={`flex-1 min-w-[120px] py-4 px-2 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1
                                        ${activeLevel === level.id 
                                            ? 'border-[#D95375] bg-[#fdf2f4] text-[#D95375] shadow-md shadow-[#D95375]/10 scale-105' 
                                            : 'border-gray-100 bg-white text-gray-500 hover:border-[#e87391] hover:text-[#D95375]'
                                        }
                                    `}
                                >
                                    <span className="text-lg font-bold">{level.name}</span>
                                    <div className={`text-xs ${activeLevel === level.id ? 'text-[#c24263]' : 'text-gray-400'}`}>
                                        {level.vocab} từ vựng
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Test List Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Danh sách Đề thi HSK {activeLevel}</h2>
                                <p className="text-gray-500">Thời gian làm bài tiêu chuẩn: {HSK_LEVELS.find(l => l.id === activeLevel)?.time} phút</p>
                            </div>
                            
                            <div className="flex gap-2">
                                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-[#D95375] focus:border-[#D95375] block w-full p-2.5 outline-none shadow-sm cursor-pointer">
                                    <option>Mới nhất</option>
                                    <option>Làm nhiều nhất</option>
                                    <option>Đề thi thật</option>
                                    <option>Đề mô phỏng</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {MOCK_TESTS.map((test) => (
                                <div key={test.id} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden">
                                    {/* Status Badge */}
                                    <div className="absolute top-0 right-0">
                                        {test.status === 'completed' && (
                                            <div className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-1 shadow-sm">
                                                <CheckCircleIcon className="w-4 h-4" /> Đã hoàn thành
                                            </div>
                                        )}
                                        {test.status === 'in-progress' && (
                                            <div className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-1 shadow-sm">
                                                <ArrowPathIcon className="w-4 h-4 animate-spin-slow" /> Đang làm
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-4 pt-2">
                                        <span className={`text-xs font-bold px-3 py-1 rounded-lg ${
                                            test.type === 'Đề thi thật' ? 'bg-[#fdf2f4] text-[#D95375]' : 'bg-blue-50 text-blue-600'
                                        }`}>
                                            {test.type}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D95375] transition-colors leading-snug">
                                        {test.title}
                                    </h3>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {test.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <div className="flex justify-between items-center py-4 border-t border-gray-100 text-sm">
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <UsersIcon className="w-4 h-4" />
                                                <span>{test.users.toLocaleString()} lượt thi</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <ClockIcon className="w-4 h-4" />
                                                <span>{HSK_LEVELS.find(l => l.id === activeLevel)?.time} phút</span>
                                            </div>
                                        </div>
                                        
                                        {test.status === 'completed' ? (
                                            <div className="flex gap-3">
                                                <div className="flex-1 bg-green-50 rounded-xl flex items-center justify-center font-bold text-green-700 py-3">
                                                    Điểm: {test.score}/300
                                                </div>
                                                <button className="w-1/3 py-3 border-2 border-[#D95375] text-[#D95375] font-bold rounded-xl hover:bg-[#D95375] hover:text-white transition-colors flex justify-center items-center">
                                                    Làm lại
                                                </button>
                                            </div>
                                        ) : test.status === 'in-progress' ? (
                                            <button className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md flex justify-center items-center gap-2 group-hover:-translate-y-1">
                                                <PlayIcon className="w-5 h-5" />
                                                Tiếp tục thi
                                            </button>
                                        ) : (
                                            <button className="w-full py-3 bg-[#D95375] text-white font-bold rounded-xl hover:bg-[#c24263] transition-colors shadow-md shadow-[#D95375]/30 flex justify-center items-center gap-2 group-hover:-translate-y-1">
                                                <PlayCircleIcon className="w-6 h-6" />
                                                Bắt đầu thi
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Pagination */}
                        <div className="flex justify-center mt-12">
                            <nav className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#D95375] hover:text-[#D95375] transition-colors">
                                    &lt;
                                </button>
                                <button className="w-10 h-10 rounded-xl bg-[#D95375] text-white font-bold shadow-md shadow-[#D95375]/20 flex items-center justify-center">
                                    1
                                </button>
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:border-[#D95375] hover:text-[#D95375] transition-colors">
                                    2
                                </button>
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:border-[#D95375] hover:text-[#D95375] transition-colors">
                                    3
                                </button>
                                <span className="text-gray-400 px-2">...</span>
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#D95375] hover:text-[#D95375] transition-colors">
                                    &gt;
                                </button>
                            </nav>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
