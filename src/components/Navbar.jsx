import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Klyro Logo" className="h-10" />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
          <Link to="/" className="text-gray-900">Home</Link>
          <Link to="/categories" className="hover:text-gray-900 transition-colors">Categories</Link>
          <Link to="/study" className="hover:text-gray-900 transition-colors">Study</Link>
          <Link to="/community" className="hover:text-gray-900 transition-colors">Community</Link>
          <Link to="/profile" className="hover:text-gray-900 transition-colors">Profile</Link>
          <Link to="/pricing" className="text-secondary font-bold hover:text-secondary/80 transition-colors">Upgrade</Link>
          <Link to="/about" className="hover:text-gray-900 transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-900 font-bold hover:opacity-80 transition-opacity">Login</Link>
          <Link to="/register" className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
