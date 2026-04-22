import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PaperAirplaneIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* 1. Hero / Map Section */}
                <section className="relative h-64 md:h-96 bg-gray-900 overflow-hidden">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 opacity-40 mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                        <div className="w-16 h-16 bg-[#F26076] text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-red-500/40 animate-bounce" style={{ animationDuration: '3s' }}>
                            <MapPinIcon className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2 drop-shadow-md">
                            Liên hệ với chúng tôi
                        </h1>
                        <p className="text-lg text-gray-700 font-medium max-w-2xl drop-shadow-md bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">
                            Klyro luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
                        </p>
                    </div>
                </section>

                {/* 2. Contact Cards & Form */}
                <section className="py-16 -mt-20 relative z-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-10">
                            
                            {/* Left: Contact Info */}
                            <div className="w-full lg:w-1/3 flex flex-col gap-6">
                                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Thông tin liên hệ</h3>
                                    
                                    <div className="space-y-8">
                                        <div className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#F26076] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F26076] group-hover:text-white transition-colors">
                                                <MapPinIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Trụ sở chính</h4>
                                                <p className="text-gray-900 font-medium">Tầng 12, Tòa nhà Klyro, 123 Đường Xuân Thủy, Cầu Giấy, Hà Nội</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <PhoneIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Hotline</h4>
                                                <p className="text-gray-900 font-medium text-lg">1900 1234</p>
                                                <p className="text-gray-500 text-sm">Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <EnvelopeIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Email</h4>
                                                <p className="text-gray-900 font-medium">support@klyro.com</p>
                                                <p className="text-gray-900 font-medium">contact@klyro.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-12 pt-8 border-t border-gray-100">
                                        <h4 className="text-gray-900 font-bold mb-4">Theo dõi chúng tôi</h4>
                                        <div className="flex gap-3">
                                            <Link href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#F26076] hover:text-white transition-colors shadow-sm">
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                            </Link>
                                            <Link href="https://youtube.com" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#F26076] hover:text-white transition-colors shadow-sm">
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5"><path fillRule="evenodd" d="M21.582 6.186a2.685 2.685 0 00-1.884-1.898C18.04 3.84 12 3.84 12 3.84s-6.04 0-7.698.448A2.685 2.685 0 002.418 6.186C2 7.848 2 12 2 12s0 4.152.418 5.814a2.685 2.685 0 001.884 1.898C6.04 20.16 12 20.16 12 20.16s6.04 0 7.698-.448a2.685 2.685 0 001.884-1.898C22 16.152 22 12 22 12s0-4.152-.418-5.814zM9.9 15.12V8.88L15.3 12l-5.4 3.12z" clipRule="evenodd" /></svg>
                                            </Link>
                                            <Link href="https://github.com" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#F26076] hover:text-white transition-colors shadow-sm">
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Contact Form */}
                            <div className="flex-1 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-[#F26076]" />
                                    <h2 className="text-3xl font-bold text-gray-900 font-serif">Gửi tin nhắn cho Klyro</h2>
                                </div>
                                <p className="text-gray-500 mb-8">Bạn cần tư vấn lộ trình học hay gặp khó khăn trong quá trình sử dụng? Hãy để lại lời nhắn, chuyên viên của chúng tôi sẽ gọi lại ngay.</p>
                                
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Họ và tên <span className="text-red-500">*</span></label>
                                            <input 
                                                type="text" 
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F26076] focus:border-transparent transition-all" 
                                                placeholder="Nguyễn Văn A"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Số điện thoại <span className="text-red-500">*</span></label>
                                            <input 
                                                type="text" 
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F26076] focus:border-transparent transition-all" 
                                                placeholder="0912 345 678"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Email của bạn</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F26076] focus:border-transparent transition-all" 
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Chủ đề cần tư vấn</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F26076] focus:border-transparent transition-all text-gray-600">
                                            <option>Tư vấn khóa học / Lộ trình</option>
                                            <option>Hỗ trợ kỹ thuật / Lỗi tài khoản</option>
                                            <option>Hợp tác / B2B</option>
                                            <option>Đóng góp ý kiến</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Nội dung chi tiết <span className="text-red-500">*</span></label>
                                        <textarea 
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F26076] focus:border-transparent transition-all resize-none" 
                                            placeholder="Hãy mô tả chi tiết vấn đề bạn đang gặp phải..."
                                        ></textarea>
                                    </div>
                                    
                                    <button type="button" className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-[#F26076] transition-colors flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                                        <PaperAirplaneIcon className="w-5 h-5" />
                                        Gửi tin nhắn ngay
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
