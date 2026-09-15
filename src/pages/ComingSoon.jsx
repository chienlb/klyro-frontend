import { useState, useEffect } from 'react';
import { Mail, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 60, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) { seconds--; }
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-primary/30 selection:text-primary-dark px-4">
      
      {/* Decorative Orbs matched to main theme */}
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>

      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%234f46e5\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1.5\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center py-12">
        
        {/* Logo */}
        <div className="mb-12 hover:scale-105 transition-transform bg-white px-8 py-4 rounded-3xl shadow-sm border border-gray-100">
          <img src={logo} alt="Klyro Logo" className="h-16" />
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 w-full text-center shadow-2xl shadow-gray-200/50 border border-gray-100 animate-fade-in-up relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-primary"></div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 uppercase tracking-widest mx-auto shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
            Version 1.0 In Progress
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6 leading-[1.1]">
            We're building something <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Extraordinary.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            The ultimate learning experience is just around the corner. We are fine-tuning our AI and content to give you the most powerful tools to master English. Stay tuned!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-10 mb-16">
            <TimeBox value={timeLeft.days} label="Days" color="primary" />
            <span className="text-3xl font-black text-gray-300 pt-6 animate-pulse">:</span>
            <TimeBox value={timeLeft.hours} label="Hours" color="secondary" />
            <span className="text-3xl font-black text-gray-300 pt-6 animate-pulse">:</span>
            <TimeBox value={timeLeft.minutes} label="Minutes" color="accent" />
            <span className="text-3xl font-black text-gray-300 pt-6 animate-pulse">:</span>
            <TimeBox value={timeLeft.seconds} label="Seconds" color="info" />
          </div>

          {/* Notify Form (Clean & Solid) */}
          <div className="max-w-lg mx-auto w-full">
            <div className="bg-gray-50 p-2 rounded-full shadow-inner border border-gray-200 flex items-center transition-all focus-within:bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
              <div className="pl-4 pr-2 text-gray-400 shrink-0">
                <Mail size={22} />
              </div>
              <input 
                type="email" 
                placeholder="Enter email for early access" 
                className="w-full flex-1 min-w-0 py-3 px-2 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-bold text-base md:text-lg"
              />
              <button 
                type="submit" 
                className="px-6 md:px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-extrabold rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                Notify Me <Bell size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function TimeBox({ value, label, color }) {
  const colorMap = {
    primary: 'text-primary bg-primary/5 border-primary/20',
    secondary: 'text-secondary bg-secondary/5 border-secondary/20',
    accent: 'text-accent bg-accent/10 border-accent/20',
    info: 'text-info bg-info/5 border-info/20'
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`w-20 h-20 md:w-28 md:h-28 border rounded-[2rem] flex items-center justify-center shadow-sm mb-4 ${colorMap[color]}`}>
        <span className="text-4xl md:text-6xl font-black tracking-tighter">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}
