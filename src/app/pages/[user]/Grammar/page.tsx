import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from "next/link"
import { BookOpenIcon, MagnifyingGlassIcon, SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export default function Grammar() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 pt-20 pb-20">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 blur-3xl rounded-full"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-[#b63d58] font-medium text-sm mb-6">
                            <SparklesIcon className="w-5 h-5" />
                            <span>Hệ thống ngữ pháp chuẩn HSK</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            Khám phá cấu trúc câu <br />
                            <span className="text-[#D95375]">từ cơ bản đến nâng cao</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                            Hơn 500 điểm ngữ pháp được phân loại chi tiết theo từng cấp độ, kèm giải thích dễ hiểu và ví dụ sinh động.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 group-focus-within:text-[#e87391] transition-colors" />
                            </div>
                            <input 
                                type="text" 
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-[#e87391] text-lg transition-all" 
                                placeholder="Tìm kiếm điểm ngữ pháp (VD: 的, 了, 把...)"
                            />
                            <button className="absolute inset-y-2 right-2 px-6 bg-[#D95375] hover:bg-[#b63d58] text-white font-bold rounded-xl transition-colors">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </section>

                {/* 2. Level Tabs */}
                <section className="pt-8 pb-4 sticky top-[72px] bg-gray-50/90 backdrop-blur-md z-40 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 overflow-x-auto pb-2 scrollbar-hide">
                        <div className="flex gap-4 min-w-max">
                            {['Tất cả', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'].map((level, idx) => (
                                <button 
                                    key={level} 
                                    className={`px-6 py-2.5 rounded-full font-bold transition-all ${idx === 1 ? 'bg-[#D95375] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-[#D95375] border border-gray-200'}`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Grammar Points */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Ngữ pháp HSK 1 (Cơ bản)</h2>
                            <span className="text-gray-500 font-medium">Hiển thị 4/45 điểm</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { 
                                    title: "Câu chữ 是 (shì)", 
                                    structure: "Chủ ngữ + 是 + Danh từ", 
                                    desc: "Dùng để định nghĩa, khẳng định sự vật, sự việc.", 
                                    example: "我是越南人。 (Wǒ shì yuènán rén.)",
                                    meaning: "Tôi là người Việt Nam."
                                },
                                { 
                                    title: "Đại từ nghi vấn 吗 (ma)", 
                                    structure: "Câu trần thuật + 吗?", 
                                    desc: "Đặt ở cuối câu để tạo thành câu hỏi Có/Không.", 
                                    example: "你好吗？ (Nǐ hǎo ma?)",
                                    meaning: "Bạn khỏe không?"
                                },
                                { 
                                    title: "Trợ từ kết cấu 的 (de)", 
                                    structure: "Định ngữ + 的 + Trung tâm ngữ", 
                                    desc: "Biểu thị quan hệ sở hữu hoặc tính chất.", 
                                    example: "我的书。 (Wǒ de shū.)",
                                    meaning: "Sách của tôi."
                                },
                                { 
                                    title: "Câu hỏi với 呢 (ne)", 
                                    structure: "Danh từ / Đại từ + 呢?", 
                                    desc: "Dùng để hỏi về vị trí hoặc lặp lại câu hỏi trước đó (Còn... thì sao?).", 
                                    example: "我很好，你呢？ (Wǒ hěn hǎo, nǐ ne?)",
                                    meaning: "Tôi rất khỏe, còn bạn thì sao?"
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-indigo-100 text-[#D95375] rounded-xl flex items-center justify-center font-bold font-serif text-xl">
                                            {item.title.split(' ')[2] || item.title.charAt(0)}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    
                                    <div className="bg-gray-50 p-4 rounded-2xl mb-4 font-mono text-sm text-[#b63d58] font-semibold border border-indigo-100/50">
                                        {item.structure}
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6">{item.desc}</p>
                                    
                                    <div className="pl-4 border-l-4 border-indigo-200">
                                        <p className="text-lg font-bold text-gray-800 mb-1">{item.example}</p>
                                        <p className="text-gray-500 italic">{item.meaning}</p>
                                    </div>
                                    
                                    <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
                                        <button className="text-[#D95375] font-semibold hover:text-indigo-800 flex items-center gap-2">
                                            Xem chi tiết <CheckCircleIcon className="w-5 h-5" />
                                        </button>
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
