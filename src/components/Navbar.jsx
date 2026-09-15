import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative transition-colors ${isActive ? 'text-primary font-bold' : 'hover:text-primary'}`;
  };

  const indicator = (path) => {
    return location.pathname === path ? (
      <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full"></span>
    ) : null;
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Klyro Logo" className="h-12 object-contain" />
        </Link>
        <div className="hidden lg:flex gap-6 text-sm font-semibold text-gray-600 items-center">
          <Link to="/" className={navLinkClass('/')}>Home {indicator('/')}</Link>
          <Link to="/categories" className={navLinkClass('/categories')}>Categories {indicator('/categories')}</Link>
          <Link to="/practice" className={navLinkClass('/practice')}>Practice {indicator('/practice')}</Link>
          <Link to="/study" className={navLinkClass('/study')}>Study {indicator('/study')}</Link>
          <Link to="/lesson" className={navLinkClass('/lesson')}>Lesson {indicator('/lesson')}</Link>
          <Link to="/blog" className={navLinkClass('/blog')}>Blog {indicator('/blog')}</Link>
          <Link to="/profile" className={navLinkClass('/profile')}>Profile {indicator('/profile')}</Link>
          <Link to="/pricing" className="text-secondary font-bold hover:text-secondary/80 transition-colors">Upgrade</Link>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/notifications" className="relative text-gray-500 hover:text-primary transition-colors block">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <Link to="/login" className="text-gray-900 font-bold hover:opacity-80 transition-opacity">Login</Link>
          <Link to="/register" className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
