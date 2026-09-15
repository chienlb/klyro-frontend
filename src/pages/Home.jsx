import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Star, TrendingUp, Users, CheckCircle, Keyboard, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [roadmapType, setRoadmapType] = useState('TOEIC');
  
  // Countdown Timer Logic (e.g., 2 days from now)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 45, seconds: 30 });

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

  const roadmaps = {
    TOEIC: [
      { step: 1, title: 'Master the Basics', subtitle: 'Foundation Phase', desc: 'Build a rock-solid foundation of essential grammar and high-frequency business vocabulary used in the modern workplace.', features: ['Core Business Vocab', 'Essential Grammar', 'Short Dialogues'], color: 'bg-primary', textColor: 'text-primary' },
      { step: 2, title: 'Skill Building & Practice', subtitle: 'Application Phase', desc: 'Transition from learning to doing. Engage with complex business emails, practice identifying keywords in audio, and learn Part 3/4 strategies.', features: ['Listening Strategies', 'Speed Reading', 'Keyword Spotting'], color: 'bg-secondary', textColor: 'text-secondary' },
      { step: 3, title: 'Exam Prep & Perfection', subtitle: 'Mastery Phase', desc: 'Take full-length mock exams. Build stamina for the 2-hour test, master time management, and analyze mistakes with our AI insights.', features: ['Full Mock Exams', 'Time Management', 'Performance Analytics'], color: 'bg-info', textColor: 'text-info' }
    ],
    IELTS: [
      { step: 1, title: 'Academic Immersion', subtitle: 'Foundation Phase', desc: 'Immerse yourself in academic English. Focus on understanding complex global accents and reading passages from academic journals.', features: ['Academic Vocabulary', 'Global Accents', 'Paragraph Structures'], color: 'bg-info', textColor: 'text-info' },
      { step: 2, title: 'Active Production', subtitle: 'Application Phase', desc: 'Start speaking and writing. Practice Speaking Part 2 monologues and write structured Task 1 & Task 2 essays with instant AI grading.', features: ['Speaking Mock Tests', 'Essay Writing', 'AI Pronunciation Check'], color: 'bg-accent', textColor: 'text-accent' },
      { step: 3, title: 'Band 8+ Refinement', subtitle: 'Mastery Phase', desc: 'Refine your advanced vocabulary (lexical resource) and complex grammar. Take timed exams under strict, realistic conditions.', features: ['Band 8+ Lexicon', 'Realistic Mocks', 'Examiner Feedback'], color: 'bg-primary', textColor: 'text-primary' }
    ],
    VSTEP: [
      { step: 1, title: 'B1 Foundation', subtitle: 'Phase 1', desc: 'Master general English vocabulary and essential grammar for everyday communication. Focus on sentence structure and basic listening.', features: ['General Vocab', 'Basic Grammar', 'Everyday Dialogues'], color: 'bg-primary', textColor: 'text-primary' },
      { step: 2, title: 'B2 Progression', subtitle: 'Phase 2', desc: 'Develop intermediate skills. Practice writing letters/emails and speaking about familiar topics with improved fluency and confidence.', features: ['Letter Writing', 'Topic Speaking', 'Reading Comprehension'], color: 'bg-secondary', textColor: 'text-secondary' },
      { step: 3, title: 'C1 Mastery', subtitle: 'Phase 3', desc: 'Achieve advanced proficiency. Write argumentative essays, debate complex issues, and comprehend academic and professional texts.', features: ['Argumentative Essays', 'Complex Debates', 'Advanced Texts'], color: 'bg-info', textColor: 'text-info' }
    ]
  };

  const testimonials = [
    {
      text: "Increased my TOEIC score by 200 points in just two months!",
      name: "Sarah Jenkins",
      score: "TOEIC: 950",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      color: "text-secondary"
    },
    {
      text: "The vocabulary tools gave me the confidence to score an 8.0.",
      name: "David Chen",
      score: "IELTS: 8.0",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      color: "text-info"
    },
    {
      text: "Completely changed how I communicate at work.",
      name: "Emma Wilson",
      score: "Business English",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      color: "text-primary"
    },
    {
      text: "The AI chatbot feels like having a personal tutor 24/7.",
      name: "Kenji Sato",
      score: "TOEFL: 110",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      color: "text-accent"
    },
    {
      text: "Finally passed my VSTEP exam after failing twice before Klyro.",
      name: "Linh Nguyen",
      score: "VSTEP: C1",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      color: "text-primary"
    },
    {
      text: "Best platform for speaking practice. The feedback is instant.",
      name: "Carlos Gomez",
      score: "IELTS: 7.5",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      color: "text-secondary"
    },
    {
      text: "A must-have for anyone serious about mastering English grammar.",
      name: "Aisha Patel",
      score: "TOEIC: 990",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      color: "text-accent"
    }
  ];

  return (
    <div className="main-container min-h-screen flex flex-col relative bg-cream">
      <Navbar />
      
      {/* Premium Floating Promotional Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 mt-8 w-full z-10 relative animate-fade-in-up">
        <div className="bg-white rounded-[2.5rem] p-1.5 shadow-2xl shadow-primary/20 border border-gray-100 relative overflow-hidden group">
          
          <div className="bg-primary rounded-[2.3rem] px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Pattern instead of gradient */}
            <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left mb-8 md:mb-0 w-full md:w-auto">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-black/10 transform group-hover:-translate-y-1 transition-transform duration-500">
                <Keyboard size={36} className="text-primary" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold mb-3 uppercase tracking-widest backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Limited Time Offer
                </div>
                <h4 className="font-black text-3xl md:text-4xl text-white mb-2 tracking-tight">Level Up Your Career</h4>
                <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl">
                  Unlock the <span className="text-white font-bold">Premium TOEIC Masterclass</span>. Use code <span className="bg-white/20 px-3 py-1 rounded-lg border border-white/30 font-mono font-bold text-white mx-1">EARLYBIRD</span> to save $20 today.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center md:items-end w-full md:w-auto">
              {/* Countdown Timer */}
              <div className="flex items-center gap-3 mb-4 bg-black/20 px-4 py-2 rounded-xl border border-white/10">
                <Clock size={16} className="text-accent" />
                <div className="flex gap-2 text-white font-mono font-bold text-lg">
                  <div className="flex flex-col items-center"><span>{String(timeLeft.days).padStart(2, '0')}</span><span className="text-[10px] text-white/60 font-sans uppercase">Days</span></div>
                  <span className="animate-pulse">:</span>
                  <div className="flex flex-col items-center"><span>{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-[10px] text-white/60 font-sans uppercase">Hrs</span></div>
                  <span className="animate-pulse">:</span>
                  <div className="flex flex-col items-center"><span>{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-[10px] text-white/60 font-sans uppercase">Min</span></div>
                  <span className="animate-pulse">:</span>
                  <div className="flex flex-col items-center"><span>{String(timeLeft.seconds).padStart(2, '0')}</span><span className="text-[10px] text-white/60 font-sans uppercase">Sec</span></div>
                </div>
              </div>
              
              <button className="w-full md:w-auto px-8 py-4 bg-accent text-gray-900 text-lg font-black rounded-2xl shadow-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                Claim Your Discount
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto w-full">
        {/* Left Side: Bento Grid */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
           <div className="rounded-[2rem] rounded-tl-[4rem] flex items-center justify-center overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-700"></div>
           </div>
           <div className="bg-secondary rounded-[2rem] rounded-tr-[4rem] flex flex-col items-center justify-center p-6 text-white hover:-translate-y-2 transition-transform cursor-pointer shadow-lg shadow-secondary/30">
              <h3 className="text-5xl font-bold mb-2">1.5k</h3>
              <p className="text-sm text-center font-medium opacity-90">Students<br/>Enrolled</p>
           </div>
           <div className="bg-accent rounded-[2rem] flex flex-col items-center justify-center p-6 text-white hover:-translate-y-2 transition-transform cursor-pointer shadow-lg shadow-accent/30">
              <h3 className="text-5xl font-bold mb-2">75+</h3>
              <p className="text-sm text-center font-medium opacity-90">Award Winning<br/>Educators</p>
           </div>
           <div className="bg-info rounded-[2rem] flex flex-col items-center justify-center p-6 text-white text-center hover:-translate-y-2 transition-transform cursor-pointer shadow-lg shadow-info/30">
              <h3 className="text-5xl font-bold mb-2">15+</h3>
              <p className="text-sm font-medium opacity-90">Years of<br/>Leadership</p>
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Inspiring Minds, <br/> Shaping Futures
          </h1>
          <p className="text-gray-600 mt-8 text-lg max-w-lg leading-relaxed border-l-4 border-primary pl-4">
            Crafting Tomorrow's Leaders Today through Innovative Teaching, Personalized Learning, and a Commitment to Academic Excellence and Character Development.
          </p>
          <div className="mt-10 flex gap-4 items-center">
            <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
              Join Now
            </button>
            <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
              Explore Courses
            </button>
          </div>
          
          <div className="mt-16 flex gap-6">
            <div className="flex-1 bg-primary text-white p-6 rounded-3xl flex flex-col shadow-lg shadow-primary/20">
              <div className="font-bold text-xl mb-2 flex items-center gap-2"><BookOpen size={20}/> Academic Excellence</div>
              <p className="text-sm opacity-90 leading-relaxed">Pioneering education for lifelong success and achievement in all exams.</p>
            </div>
            <div className="flex-1 bg-info text-white p-6 rounded-3xl flex flex-col shadow-lg shadow-info/20">
              <div className="font-bold text-xl mb-2 flex items-center gap-2"><Star size={20}/> Character Development</div>
              <p className="text-sm opacity-90 leading-relaxed">Values to compassionate and principled leaders in a globalized world.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-20 mt-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Klyro?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We combine cutting-edge technology with proven pedagogical methods.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <TrendingUp className="text-secondary" size={32}/>, title: 'Proven Methodology', desc: 'Our curriculum is designed by linguistics experts to ensure rapid and sustainable progress.' },
              { icon: <Users className="text-primary" size={32}/>, title: 'Interactive Community', desc: 'Practice with peers globally and receive real-time feedback from native speakers.' },
              { icon: <Star className="text-accent" size={32}/>, title: 'Guaranteed Results', desc: 'Achieve your target TOEIC or IELTS score or get additional coaching for free.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl hover:bg-cream transition-colors duration-300 border border-gray-100">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your journey to English mastery in three simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="w-full aspect-square rounded-[3rem] overflow-hidden mb-6 shadow-xl shadow-gray-200/50">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose Your Path</h3>
              <p className="text-gray-600">Select the certification or skill you want to master, from TOEIC to IELTS.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-full aspect-square rounded-[3rem] overflow-hidden mb-6 shadow-xl shadow-gray-200/50">
                <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Study & Practice</h3>
              <p className="text-gray-600">Engage with interactive flashcards, quizzes, and community feedback.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-full aspect-square rounded-[3rem] overflow-hidden mb-6 shadow-xl shadow-gray-200/50">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Achieve Goals</h3>
              <p className="text-gray-600">Track your progress and celebrate your success with our detailed analytics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Roadmap */}
      <div className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Detailed Learning Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A clear, step-by-step path from beginner to master.</p>
          </div>
          
          {/* Roadmap Toggle */}
          <div className="flex justify-center mb-16 overflow-x-auto pb-4">
            <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative shadow-inner min-w-max">
              <div 
                className={`absolute top-1.5 bottom-1.5 w-1/3 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${roadmapType === 'TOEIC' ? 'translate-x-0' : roadmapType === 'IELTS' ? 'translate-x-full' : 'translate-x-[200%]'}`}
              ></div>
              <button 
                onClick={() => setRoadmapType('TOEIC')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors w-40 ${roadmapType === 'TOEIC' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                TOEIC Path
              </button>
              <button 
                onClick={() => setRoadmapType('IELTS')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors w-40 ${roadmapType === 'IELTS' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                IELTS Path
              </button>
              <button 
                onClick={() => setRoadmapType('VSTEP')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors w-40 ${roadmapType === 'VSTEP' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                VSTEP Path
              </button>
            </div>
          </div>
          
          {/* Dynamic Roadmap Steps */}
          <div className="relative border-l-4 border-gray-100 ml-6 md:ml-12 space-y-16">
            {roadmaps[roadmapType].map((stepInfo, idx) => (
              <div key={idx} className="relative pl-12 md:pl-24 group">
                <div className={`absolute top-0 -left-[26px] w-12 h-12 rounded-full ${stepInfo.color} text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform`}>
                  {stepInfo.step}
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 cursor-pointer">
                  <span className={`${stepInfo.textColor} font-bold tracking-wide uppercase text-sm mb-2 block`}>{stepInfo.subtitle}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{stepInfo.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{stepInfo.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700 font-medium bg-gray-50 p-5 rounded-2xl">
                    {stepInfo.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <CheckCircle size={18} className={stepInfo.textColor} /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Success Stories / Gallery */}
      <div className="bg-secondary/5 py-24 text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Join a global community of learners who have transformed their careers through Klyro.</p>
          </div>
          
          <div className="relative w-full overflow-hidden py-4 -mx-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(testimonialIdx % testimonials.length) * (100 / 3)}%)` }}
            >
              {/* Duplicate array for smooth infinite scrolling illusion */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                <div 
                  key={idx + '-' + testimonial.name} 
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-4 flex"
                >
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between w-full hover:-translate-y-2 transition-transform duration-300">
                    <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img src={testimonial.image} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                      <div>
                        <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                        <div className={`${testimonial.color} font-medium text-sm`}>{testimonial.score}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls (Bottom Center) */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={() => setTestimonialIdx(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              &larr;
            </button>
            <button 
              onClick={() => setTestimonialIdx(prev => prev + 1)}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              &rarr;
            </button>
          </div>

        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Got questions? We've got answers.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'How long does it take to see results?', a: 'Most students notice a significant improvement in their vocabulary and test scores within 4-6 weeks of consistent daily practice.' },
              { q: 'Can I switch my learning path later?', a: 'Yes! You can change your focus from TOEIC to IELTS or General English at any time from your profile dashboard.' },
              { q: 'Is there a money-back guarantee?', a: 'Absolutely. If you don\'t see improvement after completing our 30-day program, we offer a full refund.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-secondary transition-colors cursor-pointer group">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-primary py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-10">
          <h2 className="text-4xl font-bold mb-6">Ready to shape your future?</h2>
          <p className="text-xl opacity-90 mb-10">Join over 1,500 students who are already mastering English with Klyro.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input type="email" placeholder="Enter your email" className="px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 w-full sm:w-auto min-w-[300px] focus:outline-none focus:ring-4 focus:ring-white/30 shadow-inner" />
            <button className="bg-accent text-gray-900 font-extrabold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors">Get Started Free</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
