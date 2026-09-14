import { BookOpen, Globe, MessageCircle, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-900 pt-16 pb-8 px-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-200 pb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center mb-6">
            <img src={logo} alt="Klyro Logo" className="h-16" />
          </Link>
          <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
            Crafting Tomorrow's Leaders Today through Innovative Teaching, Personalized Learning, and a Commitment to Academic Excellence. Join thousands of students mastering English worldwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-primary hover:text-white transition-colors text-gray-600"><Globe size={20} /></a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-info hover:text-white transition-colors text-gray-600"><MessageCircle size={20} /></a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-accent hover:text-white transition-colors text-gray-600"><Share2 size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-600">
            <li><Link to="/categories" className="hover:text-primary transition-colors">Courses</Link></li>
            <li><Link to="/enrolment" className="hover:text-primary transition-colors">Enrollment / Checkout</Link></li>
            <li><Link to="/lesson" className="hover:text-primary transition-colors">Classroom</Link></li>
            <li><Link to="/study" className="hover:text-primary transition-colors">Flashcards</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
            <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact & API</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-600 mb-4">Subscribe to get the latest tips for IELTS & TOEIC.</p>
          <div className="flex bg-white rounded-full overflow-hidden p-1 border-2 border-gray-300 shadow-sm focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
            <input type="email" placeholder="Your email address" className="bg-transparent text-gray-900 px-5 py-3 w-full focus:outline-none placeholder-gray-400" />
            <button className="bg-secondary px-6 rounded-full text-white font-bold hover:bg-opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} Klyro. All rights reserved.
      </div>
    </footer>
  );
}
