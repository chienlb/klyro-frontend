import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Settings, BookOpen, Award, TrendingUp, ChevronRight, Activity, Target, Mail, Key, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-extrabold text-gray-900">Dashboard</h1>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-info/20 p-4 rounded-2xl text-info"><BookOpen size={24} /></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-500 font-medium">Active Courses</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-secondary/20 p-4 rounded-2xl text-secondary"><Award size={24} /></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">450</div>
                  <div className="text-sm text-gray-500 font-medium">Words Mastered</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-accent/20 p-4 rounded-2xl text-accent"><TrendingUp size={24} /></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">7</div>
                  <div className="text-sm text-gray-500 font-medium">Day Streak</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Learning Goals */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary"><Target size={20} /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Learning Goals</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Primary Goal</span>
                    <span className="font-bold text-gray-800">Study Abroad</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Target Certification</span>
                    <span className="font-bold text-gray-800">IELTS Academic (7.0+)</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Daily Commitment</span>
                    <span className="font-bold text-gray-800">1+ hours / day</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-info/10 p-2 rounded-xl text-info"><Activity size={20} /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-gray-100">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <p className="font-bold text-gray-800">Completed IELTS Reading Practice 3</p>
                    <p className="text-sm text-gray-500 mt-1">Today, 2:30 PM</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-gray-100">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <p className="font-bold text-gray-800">Mastered 20 new Vocabulary Words</p>
                    <p className="text-sm text-gray-500 mt-1">Yesterday, 9:15 AM</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-transparent">
                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <p className="font-bold text-gray-800">Joined the "IELTS Speaking" Community</p>
                    <p className="text-sm text-gray-500 mt-1">Sep 12, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Progress */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Progress</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700">TOEIC Vocabulary</span>
                    <span className="text-gray-500 font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full transition-all" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700">IELTS Academic</span>
                    <span className="text-gray-500 font-medium">40%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-secondary h-3 rounded-full transition-all" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-extrabold text-gray-900">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'TOEIC Vocabulary', progress: 75, color: 'bg-primary' },
                { title: 'IELTS Academic', progress: 40, color: 'bg-secondary' },
                { title: 'General English', progress: 10, color: 'bg-emerald-500' }
              ].map((course, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
                  <div className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <div className="mb-6 flex-1">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-gray-500">Progress</span>
                      <span className="text-gray-700">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className={`${course.color} h-2 rounded-full`} style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                  <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    Continue <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'achievements':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-extrabold text-gray-900">Achievements</h1>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: 'First Steps', desc: 'Completed setup', icon: '🌟', color: 'bg-yellow-100 text-yellow-600' },
                  { title: 'Streak Master', desc: '7 days streak', icon: '🔥', color: 'bg-orange-100 text-orange-600' },
                  { title: 'Word Wizard', desc: '100+ words', icon: '📚', color: 'bg-blue-100 text-blue-600' },
                  { title: 'Grammar Pro', desc: 'Passed test', icon: '🎯', color: 'bg-green-100 text-green-600' },
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${badge.color}`}>
                      {badge.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{badge.title}</h3>
                    <p className="text-xs text-gray-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Certificates</h2>
              <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl text-center">
                <Award size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">No Certificates Yet</h3>
                <p className="text-gray-400">Complete a full course module to earn your first certificate.</p>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-extrabold text-gray-900">Settings</h1>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Personal Information</h2>
              <form className="space-y-6 max-w-lg">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" defaultValue="john.doe@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 pt-4">Security</h2>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
                  <input type="password" placeholder="Enter new password" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 pt-4">Connected Accounts</h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="font-bold text-gray-800">Google</span>
                  </div>
                  <button type="button" className="text-sm font-bold text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg transition-colors">Disconnect</button>
                </div>

                <div className="pt-8">
                  <button type="button" className="bg-secondary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full px-10 py-10 flex flex-col md:flex-row gap-10">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-10">
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20 text-4xl font-bold">
                J
              </div>
              <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500 font-medium">Student since 2026</p>
            </div>
            
            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-colors ${activeTab === 'dashboard' ? 'bg-cream text-primary' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <LayoutGrid size={20} /> Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-colors ${activeTab === 'courses' ? 'bg-cream text-primary' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <BookOpen size={20} /> My Courses
              </button>
              <button 
                onClick={() => setActiveTab('achievements')}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-colors ${activeTab === 'achievements' ? 'bg-cream text-primary' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Award size={20} /> Achievements
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-colors ${activeTab === 'settings' ? 'bg-cream text-primary' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Settings size={20} /> Settings
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
