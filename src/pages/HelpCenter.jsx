import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, CreditCard, MonitorPlay, MessageCircleQuestion, HelpCircle, ChevronDown, Send } from 'lucide-react';
import { useState } from 'react';

export default function HelpCenter() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How do I reset my password?",
      a: "You can reset your password by going to the Login page and clicking on 'Forgot Password'. A reset link will be sent to your registered email address."
    },
    {
      q: "Can I switch my course from TOEIC to IELTS?",
      a: "Yes! You can switch your primary course path at any time from your Profile Dashboard under the 'Learning Goals' tab."
    },
    {
      q: "How does the AI speaking evaluation work?",
      a: "Our AI uses advanced speech recognition to analyze your pronunciation, fluency, and intonation, providing instant scores and suggestions for improvement."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and Apple Pay. For annual subscriptions, bank transfers are also available."
    }
  ];

  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
            <HelpCircle size={18} /> Klyro Support
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900">How can we help you?</h1>
          
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for articles, tutorials, or FAQs..." 
              className="w-full px-8 py-5 rounded-full bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all text-lg shadow-inner" 
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-md">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-20">
        
        {/* Categories */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Browse by Topic</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <MonitorPlay size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Courses & Learning</h3>
            <p className="text-gray-600 mb-4">Everything about enrollment, flashcards, exams, and progress tracking.</p>
            <span className="text-primary font-bold text-sm group-hover:underline">12 Articles &rarr;</span>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
              <CreditCard size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Billing & Accounts</h3>
            <p className="text-gray-600 mb-4">Manage your subscription, payment methods, and account details.</p>
            <span className="text-secondary font-bold text-sm group-hover:underline">8 Articles &rarr;</span>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-transform cursor-pointer group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <MessageCircleQuestion size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Issues</h3>
            <p className="text-gray-600 mb-4">Troubleshoot audio problems, login errors, and app performance.</p>
            <span className="text-accent font-bold text-sm group-hover:underline">5 Articles &rarr;</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'border-primary shadow-md' : 'border-gray-100 hover:border-gray-300'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-900"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                </button>
                <div 
                  className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${activeFaq === idx ? 'py-4 border-t border-gray-100 opacity-100 max-h-40' : 'max-h-0 py-0 opacity-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Ticket */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[3rem] p-10 md:p-14 text-gray-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Still need help?</h2>
              <p className="text-gray-600 text-lg mb-8">Can't find the answer you're looking for? Submit a ticket and our support team will get back to you within 24 hours.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Average response time: 2 hours
              </div>
            </div>
            
            <form className="space-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              />
              <textarea 
                rows="3" 
                placeholder="Describe your issue..." 
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
              ></textarea>
              <button 
                type="button" 
                className="w-full bg-secondary text-white font-bold py-4 rounded-2xl hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                Submit Ticket <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
