import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { PencilSquareIcon, DocumentDuplicateIcon, SparklesIcon, ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { KANGXI_RADICALS } from "@/app/helpers/chineseData"

export default function Characters() {
    // Group radicals by strokes
    const groupedRadicals = KANGXI_RADICALS.reduce((acc, radical) => {
        const strokes = radical.strokes;
        if (!acc[strokes]) {
            acc[strokes] = [];
        }
        acc[strokes].push(radical);
        return acc;
    }, {} as Record<number, typeof KANGXI_RADICALS>);

    const strokeCounts = Object.keys(groupedRadicals).map(Number).sort((a, b) => a - b);

    return (
        <div className="min-h-screen bg-stone-50">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] bg-stone-100 pt-20 pb-16 border-b border-stone-200">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-100/50 to-stone-50/90 pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-red-800 text-white rounded-lg flex items-center justify-center font-serif text-3xl font-black shadow-lg mb-6 transform -rotate-3 border-2 border-red-900/50" style={{ writingMode: 'vertical-rl' }}>
                            漢字
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-4 font-serif">
                            Nghệ thuật <span className="text-red-800">Chữ Hán</span>
                        </h1>
                        <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
                            Hệ thống 214 bộ thủ Khang Hy - Chìa khóa để giải mã, ghi nhớ và thấu hiểu sâu sắc tầng ý nghĩa của mọi chữ Hán.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-xl w-full relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="w-6 h-6 text-stone-400 group-focus-within:text-red-800 transition-colors" />
                            </div>
                            <input 
                                type="text" 
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 shadow-md focus:ring-2 focus:ring-red-800 focus:border-red-800 text-lg transition-all bg-white/90 backdrop-blur-sm" 
                                placeholder="Tra cứu bộ thủ bằng Pinyin, Hán tự hoặc tiếng Việt..."
                            />
                        </div>
                    </div>
                </section>

                {/* 2. Interactive Character Writing */}
                <section className="py-16 bg-white border-b border-stone-200 shadow-sm relative overflow-hidden">
                    {/* Decorative ink splash background */}
                    <div className="absolute -right-20 top-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            {/* Left: Info */}
                            <div className="flex-1 w-full order-2 md:order-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-600 font-bold text-xs mb-6 uppercase tracking-wider">
                                    <PencilSquareIcon className="w-4 h-4" />
                                    Luyện bút thuận
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-5xl font-bold text-stone-900 mb-2 font-serif">学 <span className="text-2xl text-stone-500 font-sans ml-2">(xué)</span></h3>
                                    <p className="text-xl text-stone-600">Học, học tập</p>
                                </div>
                                
                                <div className="space-y-5 mb-8 bg-stone-50 p-6 rounded-2xl border border-stone-100">
                                    <div className="flex items-center">
                                        <div className="w-24 text-stone-500 font-medium">Bộ thủ:</div>
                                        <div className="flex-1 flex items-center gap-2">
                                            <span className="text-2xl font-serif text-red-800">子</span>
                                            <span className="text-stone-900 font-bold">Tử (Con cái)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-24 text-stone-500 font-medium">Số nét:</div>
                                        <div className="flex-1 text-stone-900 font-bold">8 nét</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-24 text-stone-500 font-medium">Từ ghép:</div>
                                        <div className="flex-1 flex flex-wrap gap-2">
                                            <span className="inline-block px-3 py-1 bg-white border border-stone-200 rounded-md text-stone-800 text-sm hover:border-red-800 transition-colors cursor-pointer shadow-sm">学生 (Học sinh)</span>
                                            <span className="inline-block px-3 py-1 bg-white border border-stone-200 rounded-md text-stone-800 text-sm hover:border-red-800 transition-colors cursor-pointer shadow-sm">学校 (Trường học)</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <button className="flex-1 py-4 bg-red-800 text-white font-bold rounded-xl hover:bg-red-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
                                        Luyện viết ngay
                                    </button>
                                </div>
                            </div>

                            {/* Right: Animation Box (Traditional Style) */}
                            <div className="flex-1 w-full order-1 md:order-2 flex justify-center">
                                <div className="w-80 h-80 bg-[#fdfbf7] shadow-xl flex items-center justify-center relative p-4" style={{ boxShadow: '0 20px 40px -10px rgba(153,27,27,0.1)' }}>
                                    {/* Paper texture overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] opacity-50 pointer-events-none"></div>
                                    
                                    {/* Grid lines for character writing (Mi Zi Ge / Điền tự cách) */}
                                    <div className="absolute inset-4 border-2 border-red-800/30 flex items-center justify-center pointer-events-none z-0">
                                        <div className="w-full h-full border-t border-red-800/30 border-dashed absolute top-1/2 -translate-y-1/2"></div>
                                        <div className="w-full h-full border-l border-red-800/30 border-dashed absolute left-1/2 -translate-x-1/2"></div>
                                        {/* Diagonals */}
                                        <div className="w-[141%] h-0 border-t border-red-800/30 border-dashed absolute transform rotate-45"></div>
                                        <div className="w-[141%] h-0 border-t border-red-800/30 border-dashed absolute transform -rotate-45"></div>
                                    </div>
                                    
                                    {/* Animated Character */}
                                    <h2 className="text-[200px] font-black text-stone-800 leading-none relative z-10 font-serif opacity-90 drop-shadow-sm" style={{ fontFamily: '"Kaiti SC", "STKaiti", serif' }}>
                                        学
                                    </h2>
                                    
                                    {/* Controls */}
                                    <div className="absolute -bottom-4 -right-4 flex gap-2 z-20">
                                        <button className="w-12 h-12 bg-white rounded-full shadow-lg border border-stone-100 flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors group">
                                            <ArrowPathIcon className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. 214 Radicals Dictionary Layout */}
                <section className="py-16 bg-stone-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            
                            {/* Left Sidebar Navigation */}
                            <div className="w-full md:w-64 flex-shrink-0">
                                <div className="sticky top-24 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                                    <h3 className="text-lg font-bold text-stone-900 mb-4 pb-4 border-b border-stone-100">Lọc theo số nét</h3>
                                    <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                        <button className="text-left px-4 py-2 bg-red-50 text-red-800 font-bold rounded-lg transition-colors">
                                            Tất cả bộ thủ
                                        </button>
                                        {strokeCounts.map(count => (
                                            <button key={count} className="text-left px-4 py-2 text-stone-600 font-medium rounded-lg hover:bg-stone-100 transition-colors flex justify-between items-center">
                                                <span>{count} nét</span>
                                                <span className="text-xs bg-stone-100 px-2 py-1 rounded-full text-stone-500 font-bold">{groupedRadicals[count].length}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Content Area */}
                            <div className="flex-1">
                                {strokeCounts.map(count => (
                                    <div key={count} className="mb-12 scroll-mt-24" id={`strokes-${count}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <h2 className="text-2xl font-bold text-stone-900 flex-shrink-0">{count} nét</h2>
                                            <div className="h-px bg-stone-200 flex-1"></div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                            {groupedRadicals[count].map((radical, idx) => (
                                                <div key={idx} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-red-800 hover:shadow-lg transition-all cursor-pointer group text-center flex flex-col items-center justify-center h-36 relative overflow-hidden">
                                                    {/* Decorative subtle background character */}
                                                    <div className="absolute -right-4 -bottom-4 text-7xl font-serif text-stone-50 group-hover:text-red-50 transition-colors pointer-events-none z-0 select-none">
                                                        {radical.char}
                                                    </div>
                                                    
                                                    <div className="relative z-10 flex flex-col items-center">
                                                        <div className="text-4xl font-serif text-stone-800 mb-2 group-hover:text-red-800 transition-colors drop-shadow-sm">
                                                            {radical.char}
                                                        </div>
                                                        <div className="text-xs font-bold text-red-800 mb-1">{radical.pinyin}</div>
                                                        <div className="text-xs text-stone-500 font-medium line-clamp-1 w-full px-1" title={radical.meaning}>{radical.meaning}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
