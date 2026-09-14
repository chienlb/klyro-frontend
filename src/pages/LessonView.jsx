import Navbar from '../components/Navbar';
import { PlayCircle, CheckCircle, FileText, Lock, ChevronLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LessonView() {
  return (
    <div className="main-container bg-white min-h-screen flex flex-col h-screen overflow-hidden">
      {/* Top Bar (Simplified Navbar for learning mode) */}
      <div className="h-20 bg-gray-900 text-white flex items-center justify-between px-6 shrink-0 z-50 shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft size={24} />
          </Link>
          <div>
            <h2 className="font-bold">TOEIC Intensive Masterclass</h2>
            <p className="text-xs text-gray-400">Module 2: Listening Strategies</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="text-sm font-medium">Your Progress</div>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-secondary rounded-full"></div>
            </div>
            <div className="text-sm font-bold text-secondary">45%</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-gray-50">
        
        {/* Main Content Area (Video/Lesson) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
          <div className="max-w-4xl mx-auto">
            {/* Video Player Mockup */}
            <div className="w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer mb-8">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle size={40} className="ml-1" />
                </div>
              </div>
              {/* Fake Video Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div className="w-1/3 h-full bg-secondary"></div>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Understanding Question Types in TOEIC Part 3</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              In this lesson, we will break down the most common question structures found in Part 3 of the TOEIC Listening section. You will learn how to identify keywords before the audio plays and how to anticipate answers.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex gap-4">
              <MessageSquare className="text-blue-500 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Teacher's Note</h4>
                <p className="text-gray-600 text-sm">Always skim the questions quickly during the instructions. Focus on question words (Who, What, Where, When, Why, How).</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <button className="px-6 py-3 rounded-full border border-gray-300 font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                Previous Lesson
              </button>
              <button className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-md">
                Complete & Continue
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar (Curriculum) */}
        <div className="w-full lg:w-96 bg-white border-l border-gray-200 flex flex-col shrink-0 overflow-y-auto shadow-xl">
          <div className="p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
            <h3 className="font-bold text-xl text-gray-900">Course Content</h3>
          </div>
          
          <div className="p-4 space-y-2">
            
            {/* Module 1 (Completed) */}
            <div className="border border-gray-100 rounded-xl overflow-hidden mb-4">
              <div className="bg-gray-50 p-4 font-bold text-gray-900 text-sm flex justify-between">
                <span>1. Introduction to TOEIC</span>
                <span className="text-green-500"><CheckCircle size={18} /></span>
              </div>
            </div>
            
            {/* Module 2 (Active) */}
            <div className="border border-primary rounded-xl overflow-hidden mb-4 shadow-sm">
              <div className="bg-primary/5 p-4 font-bold text-primary text-sm flex justify-between">
                <span>2. Listening Strategies</span>
                <span className="text-primary text-xs">2/5 Completed</span>
              </div>
              <div className="bg-white">
                <div className="p-4 flex gap-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 text-gray-400">
                  <CheckCircle size={18} className="text-green-500 shrink-0" />
                  <span className="text-sm line-through">Skimming Questions</span>
                  <span className="text-xs ml-auto">05:20</span>
                </div>
                <div className="p-4 flex gap-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 text-gray-400">
                  <CheckCircle size={18} className="text-green-500 shrink-0" />
                  <span className="text-sm line-through">Identifying Speakers</span>
                  <span className="text-xs ml-auto">08:15</span>
                </div>
                <div className="p-4 flex gap-3 bg-secondary/5 border-l-4 border-secondary cursor-pointer">
                  <PlayCircle size={18} className="text-secondary shrink-0" />
                  <span className="text-sm font-bold text-gray-900">Understanding Question Types</span>
                  <span className="text-xs ml-auto text-gray-500">12:40</span>
                </div>
                <div className="p-4 flex gap-3 hover:bg-gray-50 cursor-pointer">
                  <FileText size={18} className="text-gray-300 shrink-0" />
                  <span className="text-sm text-gray-600">Practice Quiz: Part 3</span>
                  <span className="text-xs ml-auto text-gray-400">15 Qs</span>
                </div>
              </div>
            </div>

            {/* Module 3 (Locked) */}
            <div className="border border-gray-100 rounded-xl overflow-hidden mb-4">
              <div className="bg-gray-50 p-4 font-bold text-gray-400 text-sm flex justify-between">
                <span>3. Reading Comprehension</span>
                <span className="text-gray-300"><Lock size={18} /></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
