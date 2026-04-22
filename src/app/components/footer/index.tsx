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
                        <Link href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#F26076] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </Link>
                        <Link href="https://youtube.com" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#F26076] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5"><path fillRule="evenodd" d="M21.582 6.186a2.685 2.685 0 00-1.884-1.898C18.04 3.84 12 3.84 12 3.84s-6.04 0-7.698.448A2.685 2.685 0 002.418 6.186C2 7.848 2 12 2 12s0 4.152.418 5.814a2.685 2.685 0 001.884 1.898C6.04 20.16 12 20.16 12 20.16s6.04 0 7.698-.448a2.685 2.685 0 001.884-1.898C22 16.152 22 12 22 12s0-4.152-.418-5.814zM9.9 15.12V8.88L15.3 12l-5.4 3.12z" clipRule="evenodd" /></svg>
                        </Link>
                        <Link href="https://github.com" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#F26076] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </Link>
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
