import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from "next/link"
import { PlayCircleIcon, SpeakerWaveIcon, SparklesIcon, MicrophoneIcon } from "@heroicons/react/24/outline"
import { PINYIN_INITIALS, PINYIN_FINALS, VALID_PINYIN_SYLLABLES } from "@/app/helpers/chineseData"

export default function Pronunciation() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20 pb-24">
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
                                <SparklesIcon className="w-5 h-5" />
                                <span>Luyện phát âm chuẩn bản xứ</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                                Nắm vững Pinyin <br />
                                <span className="text-blue-500">tự tin giao tiếp</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto md:mx-0">
                                Hệ thống bảng bính âm tương tác, âm thanh người thật và tính năng ghi âm phân tích phát âm thông minh.
                            </p>
                        </div>
                        <div className="flex-1 w-full relative mt-10 md:mt-0 flex justify-center">
                            <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center relative shadow-2xl shadow-blue-500/30 group">
                                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                                <MicrophoneIcon className="w-24 h-24 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Pinyin Chart (Mô phỏng) */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bảng Pinyin Tương Tác</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Nhấn vào từng âm để nghe cách phát âm chuẩn xác.</p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 overflow-x-auto shadow-sm">
                            <div className="min-w-max">
                                {/* Header Row */}
                                <div className="flex gap-2 mb-4">
                                    <div className="bg-transparent min-w-[60px] md:min-w-[80px]"></div>
                                    {PINYIN_FINALS.map(vowel => (
                                        <div key={vowel} className="bg-blue-100 text-blue-800 font-bold text-center py-3 rounded-xl text-xl min-w-[60px] md:min-w-[80px]">
                                            {vowel}
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Data Rows */}
                                {PINYIN_INITIALS.map(consonant => (
                                    <div key={consonant} className="flex gap-2 mb-2">
                                        <div className="bg-red-50 text-red-600 font-bold text-center py-4 rounded-xl flex items-center justify-center text-xl min-w-[60px] md:min-w-[80px] sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">
                                            {consonant}
                                        </div>
                                        {PINYIN_FINALS.map(vowel => {
                                            const syllable = consonant + vowel;
                                            const isValid = VALID_PINYIN_SYLLABLES.has(syllable);
                                            return (
                                                <div key={syllable} className={`text-center py-4 rounded-xl transition-all min-w-[60px] md:min-w-[80px] flex items-center justify-center ${isValid ? 'bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md cursor-pointer group' : 'bg-gray-100 text-transparent'}`}>
                                                    {isValid && (
                                                        <div className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-gray-800 text-lg group-hover:text-blue-600 font-medium">{syllable}</span>
                                                            <SpeakerWaveIcon className="w-3 h-3 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Luyện Thanh Điệu */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 Thanh Điệu Cơ Bản</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Cách phân biệt và luyện tập 4 thanh điệu trong tiếng Trung.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { num: 1, name: "Thanh 1", pinyin: "mā", desc: "Ngang, cao, không đổi", symbol: "ˉ" },
                                { num: 2, name: "Thanh 2", pinyin: "má", desc: "Lên giọng như dấu hỏi/sắc", symbol: "ˊ" },
                                { num: 3, name: "Thanh 3", pinyin: "mǎ", desc: "Xuống rồi lên", symbol: "ˇ" },
                                { num: 4, name: "Thanh 4", pinyin: "mà", desc: "Giật mạnh, dứt khoát", symbol: "ˋ" },
                            ].map((tone, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                    <div className="text-8xl font-black text-gray-50 absolute -top-4 -right-4 z-0 group-hover:text-blue-50 transition-colors">
                                        {tone.num}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-2xl mb-4">
                                            {tone.symbol}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{tone.name}</h3>
                                        <p className="text-4xl font-bold text-blue-500 my-4">{tone.pinyin}</p>
                                        <p className="text-sm text-gray-500 mb-6">{tone.desc}</p>
                                        <button className="w-full py-3 bg-gray-50 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-colors text-gray-700 font-medium group/btn">
                                            <PlayCircleIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                            Nghe thử
                                        </button>
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
