import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Home, Compass, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Animated 404 Text */}
          <div className="relative inline-block mb-8">
            <h1 className="text-9xl md:text-[12rem] font-extrabold text-gray-900 tracking-tighter opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-7xl font-extrabold text-primary">Oops!</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            >
              <Home size={20} /> Back to Home
            </Link>
            <Link 
              to="/help" 
              className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-900 transition-all flex items-center justify-center gap-2"
            >
              <Compass size={20} /> Help Center
            </Link>
          </div>
          
          <div className="mt-16 max-w-md mx-auto">
            <p className="text-sm text-gray-500 font-medium mb-4">Or try searching for what you need:</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Klyro..." 
                className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all shadow-sm pl-14"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
