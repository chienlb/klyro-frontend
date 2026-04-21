import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/logo/logo.png";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={120} height={50} className="object-contain cursor-pointer mb-4" />
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Nền tảng học tiếng Trung trực tuyến hàng đầu, giúp bạn chinh phục HSK và giao tiếp thành thạo một cách dễ dàng và hiệu quả nhất.
                    </p>
                </div>
                
                <div>
                    <h3 className="font-bold text-gray-900 mb-4">Khóa học</h3>
                    <ul className="space-y-3">
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Giao tiếp cơ bản</Link></li>
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Luyện thi HSK 1-3</Link></li>
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Luyện thi HSK 4-6</Link></li>
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Tiếng Trung thương mại</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-gray-900 mb-4">Hỗ trợ</h3>
                    <ul className="space-y-3">
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Tài liệu miễn phí</Link></li>
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Hướng dẫn học</Link></li>
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Câu hỏi thường gặp</Link></li>
                        <li><Link href="/" className="text-gray-500 hover:text-[#F26076] transition-colors text-sm">Liên hệ</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-gray-900 mb-4">Kết nối với chúng tôi</h3>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#F26076] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                            FB
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#F26076] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                            YT
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#F26076] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                            TK
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">© 2026 Klyro. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">Điều khoản</Link>
                    <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">Bảo mật</Link>
                </div>
            </div>
        </footer>
    );
}
