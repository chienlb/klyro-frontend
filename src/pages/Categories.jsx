import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Award, Globe, Compass, Star } from 'lucide-react';

export default function Categories() {
  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      <div className="px-10 py-16 max-w-7xl mx-auto w-full flex-1">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Choose a specialized path to start learning. Our comprehensive courses are designed to help you master English vocabulary and achieve your target scores with confidence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TOEIC */}
          <div className="bg-primary rounded-[2rem] p-8 shadow-xl shadow-primary/30 flex flex-col hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">TOEIC Mastery</h3>
            <p className="text-white/90 mb-6 flex-1">Comprehensive vocabulary and grammar for the TOEIC Listening & Reading test. Reach 850+.</p>
            <div className="flex justify-between items-center pt-6 border-t border-white/20">
              <span className="text-sm font-bold text-white/80">2,500 Words</span>
              <button className="text-white font-bold bg-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-primary transition-colors">Explore</button>
            </div>
          </div>

          {/* IELTS */}
          <div className="bg-info rounded-[2rem] p-8 shadow-xl shadow-info/30 flex flex-col hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">IELTS Academic</h3>
            <p className="text-white/90 mb-6 flex-1">Advanced vocabulary and essay structures for IELTS Academic. Target band 7.0+.</p>
            <div className="flex justify-between items-center pt-6 border-t border-white/20">
              <span className="text-sm font-bold text-white/80">3,000 Words</span>
              <button className="text-white font-bold bg-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-info transition-colors">Explore</button>
            </div>
          </div>

          {/* VSTEP */}
          <div className="bg-secondary rounded-[2rem] p-8 shadow-xl shadow-secondary/30 flex flex-col hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">VSTEP Preparation</h3>
            <p className="text-white/90 mb-6 flex-1">Tailored for Vietnamese students aiming for B1, B2, or C1 in the VSTEP examination.</p>
            <div className="flex justify-between items-center pt-6 border-t border-white/20">
              <span className="text-sm font-bold text-white/80">1,800 Words</span>
              <button className="text-white font-bold bg-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-secondary transition-colors">Explore</button>
            </div>
          </div>

          {/* TOEFL */}
          <div className="bg-accent rounded-[2rem] p-8 shadow-xl shadow-accent/30 flex flex-col hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-gray-900/10 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
              <Compass size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">TOEFL iBT</h3>
            <p className="text-gray-800 mb-6 flex-1">Master integrated speaking and writing tasks. Essential academic vocabulary for 100+ score.</p>
            <div className="flex justify-between items-center pt-6 border-t border-gray-900/10">
              <span className="text-sm font-bold text-gray-700">2,800 Words</span>
              <button className="text-gray-900 font-bold bg-gray-900/10 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-accent transition-colors">Explore</button>
            </div>
          </div>

          {/* General English */}
          <div className="bg-[#8FA28A] rounded-[2rem] p-8 shadow-xl shadow-[#8FA28A]/30 flex flex-col hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">General English</h3>
            <p className="text-white/90 mb-6 flex-1">Everyday vocabulary and idioms for confident daily communication and travel.</p>
            <div className="flex justify-between items-center pt-6 border-t border-white/20">
              <span className="text-sm font-bold text-white/80">1,500 Words</span>
              <button className="text-white font-bold bg-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-[#8FA28A] transition-colors">Explore</button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
