import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, ClockIcon, UserIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function News() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Header Area */}
                <section className="bg-gray-50 py-12 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Tin tức & <span className="text-[#D95375]">Kinh nghiệm</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl">
                            Cập nhật thông tin mới nhất về kỳ thi HSK, học bổng du học và những bí kíp học tiếng Trung hiệu quả từ các chuyên gia.
                        </p>
                    </div>
                </section>

                {/* 2. Content Area */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
                        
                        {/* Main Content: News Feed */}
                        <div className="flex-1">
                            
                            {/* Featured Article */}
                            <div className="mb-12 group cursor-pointer">
                                <div className="relative rounded-3xl overflow-hidden h-96 mb-6">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1541959833400-049d37f98ccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                        alt="Featured News" 
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-[#D95375] text-white text-xs font-bold rounded-md uppercase tracking-wider shadow-sm">Tin nổi bật</span>
                                            <span className="text-gray-300 text-sm flex items-center gap-1 font-medium"><CalendarIcon className="w-4 h-4" /> 15/10/2023</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors leading-tight">
                                            Chính thức công bố cấu trúc đề thi HSK 9 cấp độ mới áp dụng từ năm 2024
                                        </h2>
                                        <p className="text-gray-200 line-clamp-2 md:text-lg">
                                            Cấu trúc bài thi HSK sẽ có những thay đổi lớn, bổ sung kỹ năng Dịch thuật và nâng cao độ khó ở các cấp độ cao. Cùng tìm hiểu chi tiết...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-200 w-full mb-12"></div>

                            {/* News Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {[
                                    { 
                                        title: "Top 5 học bổng du học Trung Quốc dễ xin nhất năm 2024", 
                                        excerpt: "Chia sẻ danh sách các trường Đại học có chế độ đãi ngộ tốt và điều kiện xét tuyển học bổng CIS, CSC không quá khắt khe.", 
                                        img: "https://images.unsplash.com/photo-1506159904225-f0afebf6afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
                                        date: "12/10/2023", category: "Du học", readTime: "5 phút" 
                                    },
                                    { 
                                        title: "Phương pháp Shadowing: Bí quyết nói tiếng Trung chuẩn như người bản xứ", 
                                        excerpt: "Hướng dẫn chi tiết cách luyện tập phương pháp Shadowing để cải thiện ngữ điệu và phản xạ giao tiếp trong 30 ngày.", 
                                        img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
                                        date: "08/10/2023", category: "Kinh nghiệm", readTime: "8 phút" 
                                    },
                                    { 
                                        title: "Giải mã 100 chữ Hán dễ nhầm lẫn nhất trong đề thi HSK 4-5", 
                                        excerpt: "Những cụm từ đồng âm khác nghĩa hoặc có mặt chữ giống nhau khiến 90% thí sinh mất điểm oan trong bài thi đọc hiểu.", 
                                        img: "https://images.unsplash.com/photo-1558022874-a6a978d22384?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
                                        date: "05/10/2023", category: "Kinh nghiệm", readTime: "10 phút" 
                                    },
                                    { 
                                        title: "Review bộ giáo trình Boya Chinese - Có thực sự tốt như lời đồn?", 
                                        excerpt: "So sánh chi tiết ưu nhược điểm của giáo trình Boya và giáo trình Hán ngữ tiêu chuẩn để bạn có lựa chọn phù hợp nhất.", 
                                        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
                                        date: "01/10/2023", category: "Review", readTime: "6 phút" 
                                    },
                                    { 
                                        title: "Văn hóa trà đạo Trung Hoa: Nghệ thuật đằng sau mỗi tách trà", 
                                        excerpt: "Tìm hiểu về lịch sử, các loại trà nổi tiếng và nghi thức pha trà truyền thống của người Trung Quốc.", 
                                        img: "https://images.unsplash.com/photo-1576092762791-dd9e2220c477?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
                                        date: "28/09/2023", category: "Văn hóa", readTime: "7 phút" 
                                    },
                                    { 
                                        title: "Lịch thi HSK/HSKK năm 2024 tại các điểm thi Việt Nam", 
                                        excerpt: "Tổng hợp danh sách các ngày thi chứng chỉ tiếng Trung HSK và HSKK trên máy tính và giấy trong năm 2024.", 
                                        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
                                        date: "25/09/2023", category: "Tin tức", readTime: "3 phút" 
                                    },
                                ].map((news, idx) => (
                                    <div key={idx} className="group cursor-pointer flex flex-col h-full">
                                        <div className="relative h-60 rounded-2xl overflow-hidden mb-5">
                                            <Image 
                                                src={news.img} 
                                                alt={news.title} 
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-lg shadow-sm">
                                                {news.category}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-3">
                                            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4" /> {news.date}</span>
                                            <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" /> {news.readTime} đọc</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D95375] transition-colors line-clamp-2 leading-snug">{news.title}</h3>
                                        <p className="text-gray-600 line-clamp-2 mb-4 flex-grow">{news.excerpt}</p>
                                        <div className="text-[#D95375] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                                            Đọc tiếp <ArrowRightIcon className="w-4 h-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center gap-2">
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">«</button>
                                <button className="w-10 h-10 rounded-xl bg-[#D95375] text-white font-bold flex items-center justify-center shadow-md shadow-red-200">1</button>
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">2</button>
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">3</button>
                                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">»</button>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="w-full lg:w-80 flex-shrink-0 space-y-10">
                            
                            {/* Search */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Tìm kiếm</h3>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D95375] transition-all" 
                                        placeholder="Nhập từ khóa..."
                                    />
                                    <button className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#D95375]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">Chủ đề phổ biến</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Kinh nghiệm HSK', 'Từ vựng', 'Ngữ pháp', 'Du học', 'Giao tiếp', 'Văn hóa', 'Review sách'].map((tag, idx) => (
                                        <Link key={idx} href="#" className="px-3 py-1.5 bg-gray-50 hover:bg-[#D95375] hover:text-white text-gray-600 text-sm font-medium rounded-lg transition-colors border border-gray-100 hover:border-transparent">
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Posts */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">Bài viết xem nhiều</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Cách ghi nhớ 100 từ vựng mỗi ngày mà không bị quên", date: "10/09/2023" },
                                        { title: "Phân biệt 5 cặp từ đồng nghĩa thường thi trong HSK 5", date: "02/09/2023" },
                                        { title: "Kinh nghiệm xin học bổng Khổng Tử (CIS) chi tiết A-Z", date: "15/08/2023" },
                                        { title: "Tài liệu tự học tiếng Trung cho người mới bắt đầu", date: "20/07/2023" },
                                    ].map((post, idx) => (
                                        <div key={idx} className="flex gap-4 group cursor-pointer">
                                            <div className="text-[#D95375] font-black text-2xl opacity-40 group-hover:opacity-100 transition-opacity w-6">
                                                0{idx+1}
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1 group-hover:text-[#D95375] transition-colors leading-tight">{post.title}</h4>
                                                <span className="text-xs text-gray-500">{post.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* CTA Banner */}
                            <div className="bg-gradient-to-br from-[#D95375] to-[#ff7a8e] rounded-2xl p-6 text-white text-center shadow-lg shadow-red-200">
                                <h3 className="font-bold text-xl mb-2">Đừng bỏ lỡ!</h3>
                                <p className="text-sm text-red-50 mb-6">Đăng ký nhận bản tin hàng tuần với những tài liệu độc quyền từ Klyro.</p>
                                <input type="email" placeholder="Email của bạn" className="w-full px-4 py-2.5 rounded-lg mb-3 text-gray-900 outline-none" />
                                <button className="w-full bg-gray-900 text-white font-bold py-2.5 rounded-lg hover:bg-black transition-colors">
                                    Đăng ký ngay
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
