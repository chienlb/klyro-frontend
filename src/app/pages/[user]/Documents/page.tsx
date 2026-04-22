import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { DocumentTextIcon, MagnifyingGlassIcon, SparklesIcon, ArrowDownTrayIcon, FolderOpenIcon, StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"

export default function Documents() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-900 to-slate-900 pt-24 pb-32 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/10 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/10 blur-3xl rounded-full"></div>
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-md border border-white/20">
                                <SparklesIcon className="w-5 h-5 text-yellow-400" />
                                <span>Thư viện tài liệu Klyro</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                                Kho tài liệu tiếng Trung <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">đầy đủ & chất lượng nhất</span>
                            </h1>
                            <p className="text-lg text-gray-300 mb-10">
                                Tải xuống miễn phí giáo trình chuẩn, đề thi HSK các năm, sách bài tập và tài liệu giao tiếp độc quyền.
                            </p>
                            
                            {/* Search Bar */}
                            <div className="relative group max-w-2xl mx-auto">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                </div>
                                <input 
                                    type="text" 
                                    className="w-full pl-14 pr-32 py-5 rounded-2xl border-none shadow-2xl focus:ring-4 focus:ring-indigo-500/30 text-lg transition-all" 
                                    placeholder="Tìm kiếm giáo trình, đề thi, sách ngữ pháp..."
                                />
                                <button className="absolute inset-y-2 right-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-md">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Content Section */}
                <section className="pb-24 -mt-16 relative z-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-8">
                            
                            {/* Left Sidebar: Categories */}
                            <div className="w-full lg:w-72 flex-shrink-0">
                                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-24">
                                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FolderOpenIcon className="w-6 h-6 text-indigo-600" />
                                        Danh mục tài liệu
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Tất cả tài liệu", count: 1250, active: true },
                                            { name: "Giáo trình HSK Chuẩn", count: 18, active: false },
                                            { name: "Đề thi thật HSK (PDF+Audio)", count: 120, active: false },
                                            { name: "Sách bài tập & Ngữ pháp", count: 45, active: false },
                                            { name: "Giáo trình Hán ngữ", count: 6, active: false },
                                            { name: "Tiếng Trung Giao tiếp", count: 32, active: false },
                                            { name: "Sách đọc ngoại khóa", count: 85, active: false },
                                        ].map((cat, idx) => (
                                            <button 
                                                key={idx} 
                                                className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex justify-between items-center ${cat.active ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'}`}
                                            >
                                                <span className="truncate pr-2">{cat.name}</span>
                                                <span className={`text-xs px-2 py-1 rounded-md ${cat.active ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}>
                                                    {cat.count}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Định dạng</h4>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg cursor-pointer transition-colors">PDF</span>
                                            <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg cursor-pointer transition-colors">MP3</span>
                                            <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg cursor-pointer transition-colors">Video</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content: Document Grid */}
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                                    <p className="text-gray-600 font-medium">Hiển thị <span className="font-bold text-gray-900">12</span> trên tổng 1250 tài liệu</p>
                                    <select className="px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
                                        <option>Mới nhất</option>
                                        <option>Tải nhiều nhất</option>
                                        <option>Đánh giá cao</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {[
                                        { title: "Giáo trình Chuẩn HSK 4 (Quyển Thượng)", category: "Giáo trình HSK Chuẩn", rating: 5, downloads: "25.4K", isHot: true, format: "PDF + Audio" },
                                        { title: "Tổng hợp Đề thi thật HSK 5 năm 2023", category: "Đề thi thật", rating: 4.8, downloads: "18.2K", isHot: true, format: "PDF + Audio" },
                                        { title: "Giáo trình Hán ngữ Tập 1 (Phiên bản mới)", category: "Giáo trình Hán ngữ", rating: 4.9, downloads: "32.1K", isHot: false, format: "PDF + Audio" },
                                        { title: "Sách bài tập Ngữ pháp Tiếng Trung hiện đại", category: "Ngữ pháp", rating: 4.7, downloads: "8.5K", isHot: false, format: "PDF" },
                                        { title: "Giáo trình Tiếng Trung Giao tiếp Thương mại", category: "Giao tiếp", rating: 4.6, downloads: "5.2K", isHot: false, format: "PDF + Audio" },
                                        { title: "214 Bộ thủ Kanji & Hán tự dễ nhớ", category: "Sách học thuật", rating: 4.9, downloads: "15.8K", isHot: true, format: "PDF" },
                                    ].map((doc, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                                            {/* Book cover mock */}
                                            <div className="h-48 bg-gradient-to-br from-indigo-50 to-blue-50 relative flex items-center justify-center p-6 border-b border-gray-100">
                                                {doc.isHot && (
                                                    <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-md flex items-center gap-1 shadow-sm">
                                                        <StarIconSolid className="w-3 h-3" /> HOT
                                                    </div>
                                                )}
                                                <div className="absolute top-3 right-3 px-2 py-1 bg-white/80 backdrop-blur text-indigo-700 text-xs font-bold rounded-md border border-indigo-100">
                                                    {doc.format}
                                                </div>
                                                <div className="w-24 h-32 bg-white shadow-lg rounded-r-md border-l-4 border-indigo-600 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                                    <DocumentTextIcon className="w-10 h-10 text-indigo-200" />
                                                    {/* Decorative lines on book cover */}
                                                    <div className="absolute top-4 left-4 right-4 h-1 bg-gray-100"></div>
                                                    <div className="absolute top-7 left-4 right-8 h-1 bg-gray-100"></div>
                                                </div>
                                            </div>
                                            
                                            <div className="p-5 flex-1 flex flex-col">
                                                <p className="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wide">{doc.category}</p>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors">{doc.title}</h3>
                                                
                                                <div className="mt-auto pt-4 flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <StarIconSolid className="w-4 h-4 text-yellow-400" />
                                                        <span className="text-sm font-bold text-gray-700">{doc.rating}</span>
                                                    </div>
                                                    <div className="text-sm text-gray-500 font-medium">
                                                        {doc.downloads} lượt tải
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button className="w-full py-4 bg-gray-50 text-indigo-600 font-bold border-t border-gray-100 hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                                                <ArrowDownTrayIcon className="w-5 h-5" /> Tải xuống
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Pagination */}
                                <div className="mt-12 flex justify-center gap-2">
                                    <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">«</button>
                                    <button className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center shadow-md">1</button>
                                    <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">2</button>
                                    <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">3</button>
                                    <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                                    <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">104</button>
                                    <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">»</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
