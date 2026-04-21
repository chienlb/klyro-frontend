import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from "next/link"
import { MagnifyingGlassIcon, PlayIcon, FolderIcon, BookOpenIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { SparklesIcon as SparklesSolid } from "@heroicons/react/24/solid"

export default function Vocabulary() {
    const topics = [
        { id: 1, title: "150 từ vựng HSK 1", count: 150, category: "HSK", progress: 100, color: "from-blue-100 to-blue-50 text-blue-600 border-blue-200" },
        { id: 2, title: "300 từ vựng HSK 2", count: 300, category: "HSK", progress: 45, color: "from-green-100 to-green-50 text-green-600 border-green-200" },
        { id: 3, title: "600 từ vựng HSK 3", count: 600, category: "HSK", progress: 0, color: "from-pink-100 to-pink-50 text-[#F26076] border-pink-200" },
        { id: 4, title: "Từ vựng Giao tiếp Cơ bản", count: 200, category: "Chủ đề", progress: 0, color: "from-purple-100 to-purple-50 text-purple-600 border-purple-200" },
        { id: 5, title: "Du lịch Trung Quốc", count: 120, category: "Chủ đề", progress: 10, color: "from-amber-100 to-amber-50 text-amber-600 border-amber-200" },
        { id: 6, title: "Văn phòng & Công sở", count: 250, category: "Chủ đề", progress: 0, color: "from-teal-100 to-teal-50 text-teal-600 border-teal-200" },
        { id: 7, title: "Ẩm thực Trung Hoa", count: 85, category: "Chủ đề", progress: 80, color: "from-rose-100 to-rose-50 text-rose-600 border-rose-200" },
        { id: 8, title: "1200 từ vựng HSK 4", count: 1200, category: "HSK", progress: 0, color: "from-indigo-100 to-indigo-50 text-indigo-600 border-indigo-200" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Header Section */}
                <section className="bg-white pt-24 pb-12 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4">
                                <SparklesSolid className="w-4 h-4" />
                                Flashcard thông minh AI
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Ngân hàng <span className="text-[#F26076]">Từ vựng</span></h1>
                            <p className="text-gray-600 text-lg max-w-xl">Học từ vựng siêu tốc qua hệ thống lặp lại ngắt quãng (Spaced Repetition). Nhớ lâu hơn, học nhàn hơn.</p>
                        </div>
                        
                        <div className="w-full md:w-1/3">
                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                <div className="flex justify-between text-sm mb-2 font-medium">
                                    <span className="text-gray-500">Mục tiêu hôm nay</span>
                                    <span className="text-[#F26076]">25 / 50 từ</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
                                    <div className="bg-[#F26076] h-2.5 rounded-full" style={{ width: '50%' }}></div>
                                </div>
                                <button className="w-full py-3 bg-[#F26076] text-white font-bold rounded-xl hover:bg-[#d95375] shadow-lg shadow-[#F26076]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                    <PlayIcon className="w-5 h-5" /> Ôn tập ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Search & Filter */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                            <h2 className="text-2xl font-bold text-gray-900">Các chủ đề từ vựng</h2>
                            <div className="relative w-full sm:w-96">
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                <input 
                                    type="text" 
                                    placeholder="Tìm kiếm bộ từ vựng..." 
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26076] focus:border-transparent outline-none transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Topics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {topics.map((topic) => (
                                <div key={topic.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br border ${topic.color}`}>
                                            <FolderIcon className="w-6 h-6" />
                                        </div>
                                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                                            {topic.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#F26076] transition-colors">{topic.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6 flex items-center gap-1.5">
                                        <BookOpenIcon className="w-4 h-4" /> {topic.count} từ vựng
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-xs font-semibold text-gray-400">Tiến độ</span>
                                            {topic.progress === 100 ? (
                                                <span className="text-xs font-bold text-green-500 flex items-center gap-1"><CheckCircleIcon className="w-4 h-4" /> Hoàn thành</span>
                                            ) : (
                                                <span className="text-xs font-bold text-gray-700">{topic.progress}%</span>
                                            )}
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                            <div 
                                                className={`h-1.5 rounded-full transition-all duration-1000 ${topic.progress === 100 ? 'bg-green-500' : 'bg-[#F26076]'}`} 
                                                style={{ width: `${topic.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
