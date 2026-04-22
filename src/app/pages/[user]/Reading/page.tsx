import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import { BookOpenIcon, LanguageIcon, MagnifyingGlassPlusIcon, SparklesIcon, FireIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"

export default function Reading() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative overflow-hidden bg-white border-b border-gray-100 pt-16 pb-16">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 -skew-x-12 transform origin-top-right"></div>
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#c24263] font-bold text-sm mb-6 border border-orange-200">
                                <SparklesIcon className="w-5 h-5" />
                                <span>Thư viện đọc hiểu cá nhân hóa</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 font-serif">
                                Mở rộng vốn từ qua <br />
                                <span className="text-[#e87391]">từng trang sách</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                                Đọc tin tức, truyện ngắn và bài luận phù hợp chính xác với trình độ HSK của bạn. Tính năng tra từ popup thông minh giúp việc đọc trở nên nhẹ nhàng.
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4">
                                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-[#e87391] hover:text-white transition-colors shadow-lg">
                                    Bắt đầu đọc ngay
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex-1 w-full max-w-xl">
                            {/* Reading UI Mockup */}
                            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 relative">
                                <div className="absolute -top-4 -right-4 bg-[#e87391] text-white px-4 py-1 rounded-full font-bold shadow-lg transform rotate-6">HSK 3</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">中国茶文化</h3>
                                <p className="text-sm text-gray-400 mb-6 font-mono">Zhōngguó chá wénhuà (Văn hóa trà Trung Quốc)</p>
                                
                                <div className="text-lg text-gray-700 leading-loose relative font-serif">
                                    中国有很长的饮<span className="relative inline-block cursor-pointer group text-[#D95375] font-bold">茶
                                        {/* Popup tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none shadow-xl">
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="font-bold text-lg">茶</div>
                                                <div className="text-orange-300">chá</div>
                                            </div>
                                            <div className="text-gray-300 mb-2">danh từ</div>
                                            <div className="font-medium">trà, chè</div>
                                            {/* Triangle */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                        </div>
                                    </span>的历史。对中国人来说，喝茶不仅仅是为了解渴，更是...
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                                    <div className="flex gap-4">
                                        <span className="flex items-center gap-1"><BookOpenIcon className="w-4 h-4" /> 350 từ</span>
                                        <span className="flex items-center gap-1"><LanguageIcon className="w-4 h-4" /> Có dịch</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-[#e87391] cursor-pointer transition-colors">
                                            <MagnifyingGlassPlusIcon className="w-4 h-4" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#e87391] cursor-pointer">
                                            <BookmarkIconSolid className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Reading Library */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Thư viện bài đọc</h2>
                                <p className="text-gray-500">Được phân loại kỹ lưỡng để phù hợp với lộ trình của bạn.</p>
                            </div>
                            
                            <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-200">
                                {['Tất cả', 'HSK 1-2', 'HSK 3-4', 'HSK 5-6'].map((level, idx) => (
                                    <button 
                                        key={idx}
                                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${idx === 2 ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Cuộc sống du học sinh", pinyin: "Liúxuéshēng de shēnghuó", level: "HSK 3", words: 240, category: "Đời sống", isHot: true },
                                { title: "Văn hóa trà Trung Quốc", pinyin: "Zhōngguó chá wénhuà", level: "HSK 4", words: 450, category: "Văn hóa", isHot: true },
                                { title: "Phương thức thanh toán điện tử", pinyin: "Diànzǐ zhīfù fāngshì", level: "HSK 4", words: 520, category: "Công nghệ", isHot: false },
                                { title: "Kinh nghiệm phỏng vấn", pinyin: "Miànshì jīngyàn", level: "HSK 5", words: 800, category: "Công việc", isHot: false },
                                { title: "Sự phát triển của tàu cao tốc", pinyin: "Gāotiě de fāzhǎn", level: "HSK 5", words: 950, category: "Tin tức", isHot: false },
                                { title: "Truyện ngắn: Chờ đợi", pinyin: "Děngdài", level: "HSK 3", words: 300, category: "Truyện ngắn", isHot: false },
                            ].map((article, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full cursor-pointer">
                                    <div className="p-6 flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className={`px-3 py-1 text-xs font-bold rounded-md ${article.level.includes('3') ? 'bg-green-100 text-green-700' : article.level.includes('4') ? 'bg-orange-100 text-[#c24263]' : 'bg-red-100 text-[#c24263]'}`}>
                                                {article.level}
                                            </span>
                                            {article.isHot && (
                                                <span className="flex items-center gap-1 text-[#e87391] text-xs font-bold">
                                                    <FireIcon className="w-4 h-4" /> Hot
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#D95375] transition-colors font-serif">{article.title}</h3>
                                        <p className="text-sm text-gray-400 mb-4">{article.pinyin}</p>
                                    </div>
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between text-sm text-gray-500 font-medium mt-auto">
                                        <span>{article.category}</span>
                                        <span>{article.words} từ</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-12 text-center">
                            <button className="px-6 py-3 bg-white text-gray-700 font-bold border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                Xem thêm bài đọc
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
