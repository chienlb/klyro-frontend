import Image from "next/image"
import Link from "next/link"
import Klyro from "@/app/assets/banner.jpg"

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Left side - Branding/Illustration */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-100 to-[#D95375]/20 relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-[#D95375]/5 backdrop-blur-3xl z-0"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Chào mừng trở lại!</h1>
                    <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">Hành trình chinh phục tiếng Trung của bạn đang chờ đón. Hãy tiếp tục ngay hôm nay.</p>
                    <div className="w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <Image
                            src={Klyro}
                            alt="Login Illustration"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 bg-white">
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Đăng nhập</h2>
                        <p className="text-gray-500">Nhập thông tin của bạn để truy cập tài khoản</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D95375] focus:border-transparent outline-none transition-all"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                <a href="#" className="text-sm font-medium text-[#D95375] hover:underline">Quên mật khẩu?</a>
                            </div>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D95375] focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#D95375] text-white rounded-xl font-bold hover:bg-[#d95375] hover:shadow-lg hover:shadow-[#D95375]/30 transition-all duration-300"
                        >
                            Đăng nhập
                        </button>
                    </form>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-sm text-gray-400 font-medium">Hoặc đăng nhập với</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" fill="#1877F2" />
                            </svg>
                            Facebook
                        </button>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Chưa có tài khoản?{' '}
                        <Link href="/signup" className="font-bold text-[#D95375] hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
