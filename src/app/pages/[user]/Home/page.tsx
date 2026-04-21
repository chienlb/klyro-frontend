import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from "next/image"
import Link from "next/link"
import Klyro from "@/app/assets/banner.jpg"
import { CheckCircleIcon, SparklesIcon, AcademicCapIcon, BookOpenIcon, ChartBarIcon, UserCircleIcon, PlayCircleIcon, SpeakerWaveIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white pt-20 pb-32">
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F26076]/10 text-[#F26076] font-medium text-sm mb-6">
                                <SparklesIcon className="w-5 h-5" />
                                <span>Nền tảng học tiếng Trung #1</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Chinh phục tiếng Trung <br />
                                <span className="text-[#F26076]">dễ dàng hơn</span> bao giờ hết
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto md:mx-0">
                                Lộ trình cá nhân hóa, hệ thống bài giảng sinh động và ngân hàng đề thi sát thực tế. Bắt đầu hành trình chinh phục HSK ngay hôm nay.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-[#F26076] hover:bg-[#D95375] text-white rounded-full font-bold shadow-lg shadow-[#F26076]/30 transition-all hover:-translate-y-1">
                                    Bắt đầu học miễn phí
                                </Link>
                                <Link href="/exam" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-200 hover:border-gray-300 rounded-full font-bold shadow-sm transition-all hover:bg-gray-50">
                                    Thi thử HSK ngay
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full relative mt-10 md:mt-0">
                            {/* Decorative glow behind the image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#F26076]/30 to-orange-300/40 rounded-full blur-[100px] transform scale-110 z-0 pointer-events-none"></div>

                            <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center z-10 group">
                                {/* The framed image container */}
                                <div className="relative w-full rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(242,96,118,0.25)] border-[8px] border-white/80 bg-white group-hover:-translate-y-3 transition-transform duration-700">
                                    <Image
                                        src={Klyro}
                                        alt="Klyro Banner"
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-1/4 -left-4 md:-left-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 animate-bounce z-20" style={{ animationDuration: '3s' }}>
                                <p className="font-bold text-[#F26076] text-lg">HSK 4</p>
                                <p className="text-xs text-gray-500 font-medium">Đã đạt mục tiêu!</p>
                            </div>
                            <div className="absolute bottom-1/4 -right-4 md:-right-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 z-20">
                                <p className="font-bold text-gray-800 flex items-center gap-2">
                                    <span className="text-green-500 font-black text-lg">↑</span>
                                    <span>200 từ vựng mới</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1.5 Stats Section */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                            <div className="px-4">
                                <p className="text-4xl font-extrabold text-[#F26076] mb-2">50K+</p>
                                <p className="text-gray-500 font-medium">Học viên theo học</p>
                            </div>
                            <div className="px-4">
                                <p className="text-4xl font-extrabold text-[#F26076] mb-2">500+</p>
                                <p className="text-gray-500 font-medium">Bài giảng video</p>
                            </div>
                            <div className="px-4">
                                <p className="text-4xl font-extrabold text-[#F26076] mb-2">98%</p>
                                <p className="text-gray-500 font-medium">Tỉ lệ đỗ HSK</p>
                            </div>
                            <div className="px-4">
                                <p className="text-4xl font-extrabold text-[#F26076] mb-2">4.9/5</p>
                                <p className="text-gray-500 font-medium">Đánh giá trung bình</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Features Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tại sao chọn Klyro?</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Hệ thống học tập được thiết kế khoa học giúp bạn tiết kiệm 50% thời gian học mà vẫn đạt kết quả cao.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Lộ trình bài bản",
                                    desc: "Các khóa học từ cơ bản đến nâng cao, bám sát cấu trúc đề thi HSK mới nhất.",
                                    icon: <AcademicCapIcon className="w-8 h-8 text-[#F26076]" />
                                },
                                {
                                    title: "Ngân hàng đề thi",
                                    desc: "Hàng ngàn câu hỏi luyện tập và bộ đề thi thật các năm giúp bạn tự tin phòng thi.",
                                    icon: <BookOpenIcon className="w-8 h-8 text-[#F26076]" />
                                },
                                {
                                    title: "Theo dõi tiến độ",
                                    desc: "Hệ thống AI phân tích điểm mạnh yếu, cá nhân hóa bài tập mỗi ngày cho riêng bạn.",
                                    icon: <ChartBarIcon className="w-8 h-8 text-[#F26076]" />
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100">
                                    <div className="w-14 h-14 bg-[#F26076]/10 rounded-2xl flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2.5 How It Works Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ trình chinh phục HSK</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Chỉ với 4 bước đơn giản, bạn sẽ làm chủ tiếng Trung và tự tin vượt qua mọi kỳ thi.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#F26076]/20 to-[#ff7a8e]/20 -translate-y-1/2 z-0"></div>
                            
                            {[
                                { step: "01", title: "Kiểm tra đầu vào", desc: "Test miễn phí để xác định chính xác trình độ hiện tại." },
                                { step: "02", title: "Lộ trình cá nhân", desc: "Hệ thống tự động tạo kế hoạch học tập dành riêng cho bạn." },
                                { step: "03", title: "Luyện tập mỗi ngày", desc: "Học với video, thẻ từ vựng và bài tập thực hành sinh động." },
                                { step: "04", title: "Thi thử sát thực tế", desc: "Làm quen áp lực phòng thi với ngân hàng đề thi đa dạng." },
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F26076] to-[#ff7a8e] rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto mb-6 shadow-lg shadow-[#F26076]/30">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Popular Courses */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Khóa học tiêu biểu</h2>
                                <p className="text-gray-500 text-lg">Đa dạng lựa chọn cho mọi nhu cầu và trình độ.</p>
                            </div>
                            <Link href="/courses" className="text-[#F26076] font-semibold hover:underline">Xem tất cả khóa học →</Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Tiếng Trung Giao Tiếp", level: "Cơ bản", lessons: 45, students: "12.5K", bg: "bg-blue-100" },
                                { name: "Luyện Thi HSK 3", level: "Trung cấp", lessons: 60, students: "8.2K", bg: "bg-pink-100" },
                                { name: "Luyện Thi HSK 4", level: "Nâng cao", lessons: 85, students: "5.4K", bg: "bg-purple-100" },
                            ].map((course, idx) => (
                                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                    <div className={`h-48 ${course.bg} flex items-center justify-center relative`}>
                                        <div className="text-6xl font-bold text-black/10 absolute font-serif">{course.name.split(' ')[0]}</div>
                                        <div className="px-4 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs font-bold text-gray-700 absolute top-4 left-4">
                                            {course.level}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                            <span className="flex items-center gap-1"><BookOpenIcon className="w-4 h-4" /> {course.lessons} Bài học</span>
                                            <span className="flex items-center gap-1"><UserCircleIcon className="w-4 h-4" /> {course.students}</span>
                                        </div>
                                        <button className="w-full py-3 bg-gray-50 text-gray-900 font-semibold rounded-xl hover:bg-[#F26076] hover:text-white transition-colors">
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3.5 Feature Highlight: Flashcards */}
                <section className="py-24 bg-gray-50 overflow-hidden relative">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-white/0 via-white to-white/0 pointer-events-none"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F26076]/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                        <div className="flex-1 w-full relative">
                            {/* Decorative glowing orb behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-[#F26076]/30 to-orange-300/30 blur-[60px] rounded-full z-0"></div>

                            {/* Stacked cards effect (Lồng 2 thẻ chéo) */}
                            <div className="absolute inset-0 bg-[#F26076]/10 rounded-[2.5rem] transform rotate-[-6deg] scale-[0.98] shadow-sm border border-white/50 z-0 transition-transform duration-500 group-hover:rotate-[-10deg]"></div>
                            
                            {/* Main Flashcard */}
                            <div className="relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white z-10 group hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex gap-2">
                                        <span className="px-4 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 font-bold rounded-full text-sm shadow-sm border border-orange-100">HSK 3</span>
                                        <span className="px-3 py-1.5 bg-gray-100 text-gray-500 font-semibold rounded-full text-sm">Từ mới</span>
                                    </div>
                                    <span className="text-gray-400 font-bold bg-gray-50 px-3 py-1 rounded-lg">1 / 600</span>
                                </div>
                                <div className="text-center py-10 relative">
                                    {/* Chinese Character */}
                                    <h3 className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 mb-6 drop-shadow-sm">你好</h3>
                                    
                                    {/* Pinyin with speaker */}
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <p className="text-3xl text-gray-500 font-medium">nǐ hǎo</p>
                                        <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 hover:scale-110 transition-all cursor-pointer">
                                            <SpeakerWaveIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                    
                                    {/* Translation */}
                                    <p className="text-2xl text-gray-800 font-bold">Xin chào</p>
                                </div>
                                
                                {/* Interaction Buttons */}
                                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
                                    <button className="flex-1 py-4 bg-red-50 text-red-500 font-bold rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm">
                                        <XMarkIcon className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                                        Chưa nhớ
                                    </button>
                                    <button className="flex-1 py-4 bg-green-50 text-green-500 font-bold rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm">
                                        <CheckIcon className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                                        Đã nhớ
                                    </button>
                                </div>
                            </div>
                            
                            {/* Floating elements */}
                            <div className="absolute -right-6 top-20 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                                <div className="text-sm font-bold text-green-500 flex items-center gap-1">+1 Điểm nhớ</div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F26076]/10 to-orange-400/10 text-[#F26076] font-bold text-sm mb-8 border border-[#F26076]/20 shadow-sm">
                                <SparklesIcon className="w-5 h-5" /> Flashcard AI Thông minh
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Học từ vựng <span className="text-[#F26076]">nhanh gấp 3 lần</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Áp dụng thuật toán Lặp lại ngắt quãng (Spaced Repetition), hệ thống sẽ tự động nhắc lại những từ bạn hay quên vào thời điểm tối ưu nhất. Nhớ lâu hơn, học nhàn hơn.
                            </p>
                            <div className="space-y-6 mb-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                {[
                                    { text: "Hơn 10,000 từ vựng được phân loại sẵn", desc: "Từ HSK 1 đến HSK 6 và giao tiếp cơ bản" },
                                    { text: "Hình ảnh minh họa và phát âm chuẩn", desc: "Giọng đọc bản xứ tự nhiên, dễ nghe" },
                                    { text: "Tự động tạo bài tập ôn luyện theo tiến độ", desc: "AI phân tích từ nào bạn hay quên để nhắc lại" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckIcon className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-bold text-lg">{item.text}</p>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href="/vocabulary" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-[#F26076] hover:shadow-[#F26076]/30 transition-all hover:-translate-y-1">
                                Khám phá kho từ vựng <PlayCircleIcon className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 3.6 Testimonials */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Học viên nói gì về Klyro?</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Cộng đồng học viên hài lòng chính là minh chứng lớn nhất cho chất lượng đào tạo của chúng tôi.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Phạm Minh Đức", role: "Sinh viên ĐH Ngoại Thương", review: "Từ một người mất gốc, mình đã thi đỗ HSK 4 chỉ sau 3 tháng học trên nền tảng. Hệ thống flashcard thực sự rất hiệu quả!" },
                                { name: "Trần Quỳnh Như", role: "Nhân viên văn phòng", review: "Mình rất thích lộ trình học rõ ràng ở đây. Mỗi ngày chỉ cần dành 30 phút là có thể hoàn thành mục tiêu. Rất tuyệt vời!" },
                                { name: "Lê Hoàng Phúc", role: "Du học sinh tại Bắc Kinh", review: "Ngân hàng đề thi sát với đề thi thật kinh khủng. Làm đề trên Klyro xong vào phòng thi tự tin hẳn." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all">
                                    <div className="flex gap-1 mb-6 text-amber-400">
                                        {[1,2,3,4,5].map(star => <StarIconSolid key={star} className="w-5 h-5" />)}
                                    </div>
                                    <p className="text-gray-700 mb-8 italic">"{item.review}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#F26076] to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{item.name}</p>
                                            <p className="text-sm text-gray-500">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Final CTA */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6 relative group">
                        {/* Decorative background card (Stacked effect) */}
                        {/* We use scale-95 to make it slightly smaller, preventing the corners from awkwardly merging and looking "khép kín" */}
                        <div className="absolute inset-0 bg-[#D95375] rounded-3xl transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 scale-[0.98] z-0 transition-transform duration-300 group-hover:translate-x-8 group-hover:translate-y-8"></div>

                        {/* Main CTA Card */}
                        <div className="relative z-10 bg-gradient-to-br from-[#F26076] to-[#ff7a8e] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
                            {/* Ambient light effect inside card */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/20 blur-3xl rounded-full"></div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Sẵn sàng để bắt đầu?</h2>
                            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                                Hàng ngàn học viên đã chinh phục tiếng Trung thành công cùng Klyro. Tạo tài khoản ngay để nhận 3 ngày học trải nghiệm miễn phí.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                <Link href="/signup" className="w-full sm:w-auto inline-block px-10 py-4 bg-white text-[#F26076] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                    Tạo tài khoản miễn phí
                                </Link>
                            </div>

                            <p className="text-white/80 text-sm mt-6 flex items-center justify-center gap-2 relative z-10">
                                <CheckCircleIcon className="w-5 h-5" />
                                Không yêu cầu thẻ tín dụng
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}