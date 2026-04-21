import Logo from "@/app/assets/logo/logo.png"
import Image from "next/image"
import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"

const NAV_LINKS = [
    { name: 'Khóa học', href: '/' },
    { name: 'Từ vựng', href: '/' },
    { name: 'Luyện nghe', href: '/' },
    { name: 'Luyện thi HSK', href: '/' },
    { name: 'Thi thử', href: '/' },
    { name: 'Tài liệu', href: '/' },
    { name: 'Tin tức', href: '/' },
    { name: 'Liên hệ', href: '/' },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 bg-white/80 backdrop-blur-md transition-all border-none">
            <nav className="flex items-center gap-10">
                <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
                    <Image src={Logo} alt="Logo" width={90} height={40} className="object-contain cursor-pointer" />
                </Link>

                <ul className="hidden lg:flex items-center gap-7">
                    {NAV_LINKS.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-[15px] font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav>
                <ul className="flex items-center gap-3">
                    <li>
                        <Link
                            href="/signup"
                            className="text-[15px] font-bold text-white bg-[#F26076] hover:bg-[#D95375] px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Bắt đầu học
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="text-[15px] font-medium text-gray-700 hover:text-blue-600 px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Đăng nhập
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}