import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Terminal, Key, LifeBuoy, MapPin, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-white py-20 px-6 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">API & Contact Support</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Integrate Klyro's powerful English learning engine into your apps, or reach out to us for general support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: API Docs & Info */}
        <div className="space-y-12">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Terminal size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">API Documentation</h2>
              <p className="text-gray-600 mb-6">
                Explore our comprehensive guides and documentation to help you start working with Klyro API as quickly as possible.
              </p>
              <Link to="/docs" className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors">
                View Documentation
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Key size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request API Key</h2>
              <p className="text-gray-600 mb-6">
                Ready to start building? Request a developer API key to test our vocabulary and pronunciation endpoints.
              </p>
              <a href="#" className="inline-block bg-white text-secondary border-2 border-secondary font-bold py-3 px-8 rounded-xl hover:bg-secondary hover:text-white transition-colors">
                Generate Key
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200">
              <MapPin className="text-gray-400 mb-3" size={24} />
              <h3 className="font-bold text-gray-900 mb-1">Our Office</h3>
              <p className="text-sm text-gray-600">123 Learning Ave,<br/>EduCity, EC 10000</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200">
              <Mail className="text-gray-400 mb-3" size={24} />
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-sm text-gray-600">hello@klyro.com<br/>api-support@klyro.com</p>
            </div>
          </div>

        </div>

        {/* Right: Contact Form */}
        <div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Send a Message</h2>
            <p className="text-gray-500 mb-8">We'd love to hear from you. Let us know how we can help.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>API Support</option>
                  <option>Billing Question</option>
                  <option>Bug Report</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="4" placeholder="How can we help?" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-secondary text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg flex items-center justify-center gap-2">
                <LifeBuoy size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
