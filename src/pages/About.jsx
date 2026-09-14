import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Users, BookOpen, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-white py-24 px-10 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-gray-900">Redefining Language Education</h1>
          <p className="text-xl text-gray-600 leading-relaxed">Our mission is to make mastering English accessible, engaging, and effective for everyone, everywhere.</p>
        </div>
      </div>
      
      <div className="flex-1 px-10 py-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">To empower individuals by breaking down language barriers and providing world-class education tools.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community First</h3>
            <p className="text-gray-600 leading-relaxed">We believe in the power of a supportive community to accelerate learning and foster global connections.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-info/10 w-20 h-20 rounded-2xl flex items-center justify-center text-info mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 leading-relaxed">Education doesn't stop after the test. We instill a lifelong love for learning in all our students.</p>
          </div>
        </div>
        
        {/* Story Section */}
        <div className="bg-white rounded-[3rem] p-12 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row gap-12 items-center mb-20 border border-gray-100">
           <div className="w-full md:w-1/2">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full" />
           </div>
           <div className="w-full md:w-1/2">
             <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-6">
               Founded in 2026, Klyro started with a simple idea: that learning English shouldn't be a chore, but an exciting journey. We saw traditional methods failing to engage students and realized technology could bridge the gap.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               Today, we are a global team of educators, linguists, and engineers dedicated to providing the most effective, personalized learning experience possible. Join us and shape your future.
             </p>
           </div>
        </div>

        {/* Contact & Location */}
        <div className="bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 flex flex-col md:flex-row text-gray-900">
          <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">Have questions about our courses or pricing? Our friendly team is here to help you every step of the way.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl"><MapPin size={24} className="text-primary" /></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Our Headquarters</h4>
                  <p className="text-gray-500 font-medium">123 Innovation Drive, Tech District, City 10000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl"><Phone size={24} className="text-secondary" /></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Call Us</h4>
                  <p className="text-gray-500 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl"><Mail size={24} className="text-info" /></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Email</h4>
                  <p className="text-gray-500 font-medium">hello@klyro.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl"><Clock size={24} className="text-accent" /></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Working Hours</h4>
                  <p className="text-gray-500 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 min-h-[400px] relative bg-gray-100">
            {/* Using a static map image for demonstration to ensure it looks great without requiring an API key */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0 opacity-90" alt="Location Map" />
            
            {/* Map Marker overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
               <div className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/40 animate-bounce">
                 <MapPin size={32} />
               </div>
               <div className="bg-white text-gray-900 font-bold px-4 py-2 rounded-xl mt-4 shadow-xl text-sm border border-gray-100">
                 Klyro HQ
               </div>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
