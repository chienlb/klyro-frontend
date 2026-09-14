import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Star, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

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
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Detailed Learning Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A clear, step-by-step path from beginner to master.</p>
          </div>
          
          <div className="relative border-l-4 border-gray-100 ml-6 md:ml-12 space-y-16">
            
            {/* Step 1 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute top-0 -left-[26px] w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">1</div>
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform">
                <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block">Foundation Phase</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Master the Basics</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">We start by building a rock-solid foundation of essential grammar and high-frequency vocabulary. You'll use our interactive flashcards to memorize the 500 most important words.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Core Vocabulary</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Essential Grammar</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Pronunciation Guides</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute top-0 -left-[26px] w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">2</div>
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform">
                <span className="text-secondary font-bold tracking-wide uppercase text-sm mb-2 block">Application Phase</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill Building & Practice</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Transition from learning to doing. Engage with complex texts, practice listening to native speakers, and start writing structured paragraphs with our AI feedback system.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Listening Comprehension</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Reading Strategies</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Guided Writing</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute top-0 -left-[26px] w-12 h-12 rounded-full bg-info text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">3</div>
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform">
                <span className="text-info font-bold tracking-wide uppercase text-sm mb-2 block">Mastery Phase</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exam Prep & Perfection</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">It's time to test your mettle. Take full-length, timed mock exams for IELTS or TOEIC. Receive detailed analytics on your weaknesses and get expert essay grading.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-info" /> Full Mock Exams</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-info" /> Expert Essay Grading</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-info" /> Performance Analytics</li>
                </ul>
              </div>
            </div>

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
