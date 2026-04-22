import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from "next/link"
import { BookOpenIcon, UserCircleIcon, ClockIcon, StarIcon, CheckBadgeIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"

export default function Courses() {
    const categories = ["Tất cả", "Cơ bản", "HSK 3", "HSK 4", "HSK 5", "Giao tiếp"];
    
    const courses = [
        { id: 1, name: "Tiếng Trung Cơ Bản 1", level: "Cơ bản", lessons: 24, students: "12.5K", rating: 4.8, bg: "bg-gradient-to-br from-blue-400 to-[#D95375]", color: "blue", popular: true },
        { id: 2, name: "Luyện Thi HSK 3", level: "Trung cấp", lessons: 45, students: "8.2K", rating: 4.9, bg: "bg-gradient-to-br from-[#D95375] to-[#ff7a8e]", color: "rose", popular: true },
        { id: 3, name: "Luyện Thi HSK 4", level: "Nâng cao", lessons: 60, students: "5.4K", rating: 4.7, bg: "bg-gradient-to-br from-purple-400 to-purple-600", color: "purple", popular: false },
        { id: 4, name: "Giao Tiếp Văn Phòng", level: "Mọi trình độ", lessons: 30, students: "9.1K", rating: 4.9, bg: "bg-gradient-to-br from-teal-400 to-[#D95375]", color: "teal", popular: false },
        { id: 5, name: "Ngữ Pháp HSK 5", level: "Cao cấp", lessons: 50, students: "3.2K", rating: 4.6, bg: "bg-gradient-to-br from-orange-400 to-orange-600", color: "orange", popular: false },
        { id: 6, name: "Tiếng Trung Du Lịch", level: "Cơ bản", lessons: 15, students: "15.3K", rating: 4.8, bg: "bg-gradient-to-br from-emerald-400 to-emerald-600", color: "emerald", popular: true },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-white pt-24 pb-16 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Khám phá <span className="text-[#D95375]">Lộ trình học</span></h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Chọn khóa học phù hợp với mục tiêu của bạn. Từ con số 0 đến thành thạo giao tiếp và chinh phục chứng chỉ HSK.</p>
                        
                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative shadow-sm rounded-2xl overflow-hidden flex">
                            <input 
                                type="text" 
                                placeholder="Bạn muốn học gì hôm nay?" 
                                className="w-full px-6 py-4 outline-none text-gray-700 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#D95375] transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-6 bg-[#D95375] text-white font-semibold rounded-xl hover:bg-[#d95375] transition-colors">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </section>

                {/* Course List Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Categories/Filters */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                            {categories.map((cat, idx) => (
                                <button 
                                    key={idx} 
                                    className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${idx === 0 ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Courses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course) => (
                                <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all group flex flex-col">
                                    <div className={`h-48 ${course.bg} p-6 flex flex-col justify-between relative overflow-hidden`}>
                                        {/* Decorative circle */}
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                        
                                        <div className="relative z-10 flex justify-between items-start">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold uppercase tracking-wider">
                                                {course.level}
                                            </span>
                                            {course.popular && (
                                                <span className="flex items-center gap-1 text-white text-xs font-bold bg-orange-500 px-3 py-1 rounded-full shadow-sm">
                                                    <StarIconSolid className="w-3 h-3" /> Nổi bật
                                                </span>
                                            )}
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                                            {course.name}
                                        </h3>
                                    </div>
                                    
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-1.5"><BookOpenIcon className="w-4.5 h-4.5" /> <span>{course.lessons} Bài học</span></div>
                                            <div className="flex items-center gap-1.5"><UserCircleIcon className="w-4.5 h-4.5" /> <span>{course.students}</span></div>
                                            <div className="flex items-center gap-1.5 ml-auto text-amber-500 font-medium">
                                                <StarIconSolid className="w-4.5 h-4.5" /> <span>{course.rating}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <div className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                                Miễn phí <CheckBadgeIcon className="w-5 h-5 text-[#e87391]" />
                                            </div>
                                            <Link href={`/courses/${course.id}`} className="px-6 py-2.5 bg-gray-50 text-gray-900 font-semibold rounded-xl hover:bg-[#D95375] hover:text-white transition-colors">
                                                Học ngay
                                            </Link>
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
