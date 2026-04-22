import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import { MicrophoneIcon, PlayIcon, SparklesIcon, ChartBarIcon, ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/24/outline"

export default function Speaking() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white pt-20 pb-20">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/40 blur-3xl rounded-full mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-200/40 blur-3xl rounded-full mix-blend-multiply pointer-events-none"></div>
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-[#c24263] font-bold text-sm mb-6 border border-emerald-200/50 shadow-sm">
                                <SparklesIcon className="w-5 h-5" />
                                <span>Luyện nói cùng AI Tutor</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                                Giao tiếp trôi chảy <br />
                                <span className="text-[#D95375]">tự tin thực chiến</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto md:mx-0">
                                Đập tan nỗi sợ nói tiếng Trung với phòng luyện tập giả lập AI. Chấm điểm phát âm chi tiết từng âm tiết và sửa lỗi ngay lập tức.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <button className="px-8 py-4 bg-[#D95375] hover:bg-[#c24263] text-white rounded-2xl font-bold shadow-lg shadow-[#D95375]/30 transition-all hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
                                    <MicrophoneIcon className="w-6 h-6" />
                                    Bắt đầu luyện nói
                                </button>
                                <button className="px-8 py-4 bg-white text-[#c24263] border border-emerald-200 rounded-2xl font-bold hover:bg-emerald-50 transition-all w-full sm:w-auto">
                                    Xem hướng dẫn
                                </button>
                            </div>
                        </div>
                        
                        {/* Hero Right: App UI Mockup */}
                        <div className="flex-1 w-full max-w-md mx-auto relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#e87391] to-teal-300 rounded-[3rem] transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                            
                            <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white/80 z-10">
                                {/* App Header */}
                                <div className="bg-[#D95375] p-6 text-white flex items-center justify-between">
                                    <div className="font-bold">Nhà hàng (餐厅)</div>
                                    <div className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">Đang ghi âm...</div>
                                </div>
                                
                                {/* Chat Interface */}
                                <div className="p-6 h-[400px] flex flex-col gap-6 bg-gray-50">
                                    {/* AI Message */}
                                    <div className="flex items-end gap-3 w-5/6">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e87391] to-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                                            <SparklesIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                                            <p className="text-lg font-bold text-gray-800 mb-1">欢迎光临！请问几位？</p>
                                            <p className="text-sm text-gray-500">Huānyíng guānglín! Qǐngwèn jǐ wèi?</p>
                                        </div>
                                    </div>
                                    
                                    {/* User Message */}
                                    <div className="flex items-end gap-3 w-5/6 self-end justify-end">
                                        <div className="bg-[#D95375] p-4 rounded-2xl rounded-br-none shadow-sm text-white relative">
                                            <p className="text-lg font-bold mb-1">我们两位。</p>
                                            <p className="text-sm text-emerald-100">Wǒmen liǎng wèi.</p>
                                            {/* Score Badge */}
                                            <div className="absolute -top-3 -left-3 bg-white text-[#D95375] text-xs font-bold px-2 py-1 rounded-full shadow-md border border-emerald-100">
                                                98 điểm
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
                                            <UserCircleIcon className="w-8 h-8 text-[#D95375]" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Recording control */}
                                <div className="p-6 bg-white border-t border-gray-100 flex justify-center items-center">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-1 bg-emerald-100 rounded-full overflow-hidden">
                                            <div className="w-1/3 h-full bg-[#e87391] rounded-full animate-pulse"></div>
                                        </div>
                                        <button className="w-16 h-16 bg-emerald-50 text-[#D95375] rounded-full flex items-center justify-center shadow-inner hover:bg-emerald-100 transition-colors border-2 border-emerald-200 relative">
                                            <div className="absolute inset-0 border-2 border-[#e87391] rounded-full animate-ping opacity-50"></div>
                                            <MicrophoneIcon className="w-8 h-8" />
                                        </button>
                                        <div className="w-16 h-1 bg-emerald-100 rounded-full overflow-hidden">
                                            <div className="w-2/3 h-full bg-[#e87391] rounded-full animate-pulse delay-75"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Topics Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Các chủ đề giao tiếp</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Từ cơ bản đến chuyên ngành, đáp ứng mọi nhu cầu học tập và làm việc.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Làm quen & Chào hỏi", desc: "Các mẫu câu giới thiệu bản thân, chào hỏi hàng ngày.", level: "HSK 1", icon: <ChatBubbleLeftRightIcon /> },
                                { title: "Mua sắm & Mặc cả", desc: "Hỏi giá, mặc cả, thanh toán tại cửa hàng, siêu thị.", level: "HSK 2", icon: <ChatBubbleLeftRightIcon /> },
                                { title: "Nhà hàng & Ăn uống", desc: "Gọi món, yêu cầu phục vụ, thanh toán hóa đơn.", level: "HSK 2", icon: <ChatBubbleLeftRightIcon /> },
                                { title: "Du lịch & Chỉ đường", desc: "Hỏi đường, bắt taxi, mua vé xe, đặt phòng khách sạn.", level: "HSK 3", icon: <ChatBubbleLeftRightIcon /> },
                                { title: "Công sở & Phỏng vấn", desc: "Viết CV, trả lời phỏng vấn, giao tiếp đồng nghiệp.", level: "HSK 4", icon: <ChatBubbleLeftRightIcon /> },
                                { title: "Thương mại & Đàm phán", desc: "Ký kết hợp đồng, đàm phán giá cả với đối tác.", level: "HSK 5", icon: <ChatBubbleLeftRightIcon /> },
                            ].map((topic, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 bg-emerald-50 text-[#D95375] rounded-2xl flex items-center justify-center group-hover:bg-[#e87391] group-hover:text-white transition-colors">
                                            {topic.icon}
                                        </div>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg">{topic.level}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                                    <p className="text-gray-500 mb-6 line-clamp-2">{topic.desc}</p>
                                    
                                    <button className="w-full py-3 bg-gray-50 text-gray-700 font-bold rounded-xl hover:bg-emerald-50 hover:text-[#c24263] transition-colors flex items-center justify-center gap-2">
                                        Vào phòng luyện tập <PlayIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 3. Features Detail */}
                <section className="py-20 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center px-4">
                                <div className="w-20 h-20 mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#e87391]">
                                    <MicrophoneIcon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Chấm điểm AI 99%</h3>
                                <p className="text-gray-500">Công nghệ nhận diện giọng nói độ chính xác cao, chỉ ra lỗi sai đến từng thanh điệu.</p>
                            </div>
                            <div className="text-center px-4">
                                <div className="w-20 h-20 mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#e87391]">
                                    <ChatBubbleLeftRightIcon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Tình huống thực tế</h3>
                                <p className="text-gray-500">Hơn 200 kịch bản giao tiếp được xây dựng dựa trên cuộc sống thực tế tại Trung Quốc.</p>
                            </div>
                            <div className="text-center px-4">
                                <div className="w-20 h-20 mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#e87391]">
                                    <ChartBarIcon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Theo dõi tiến độ</h3>
                                <p className="text-gray-500">Báo cáo chi tiết về sự tiến bộ trong phát âm, độ trôi chảy và từ vựng sử dụng.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
