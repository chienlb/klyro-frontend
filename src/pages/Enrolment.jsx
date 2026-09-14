import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ShieldCheck, CreditCard, Lock } from 'lucide-react';

export default function Enrolment() {
  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Order Summary */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Complete Your Enrollment</h1>
          <p className="text-gray-600 mb-10">You're one step away from mastering English with Klyro's premium TOEIC Intensive course.</p>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <img src="https://images.unsplash.com/photo-1546410531-ea4cea477149?q=80&w=150&auto=format&fit=crop" className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">TOEIC Intensive Masterclass</h4>
                <p className="text-sm text-gray-500">6 Months Access • AI Feedback</p>
                <div className="text-primary font-bold mt-2">$99.00</div>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex justify-between"><span>Subtotal</span><span>$99.00</span></div>
              <div className="flex justify-between text-secondary"><span>Discount (EARLYBIRD)</span><span>-$20.00</span></div>
              <div className="flex justify-between"><span>Tax</span><span>$4.00</span></div>
            </div>
            
            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <span className="font-bold text-gray-900 text-xl">Total Due</span>
              <span className="font-extrabold text-3xl text-gray-900">$83.00</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-2xl border border-green-100">
              <ShieldCheck className="text-green-600 mt-1" size={24} shrink-0 />
              <div>
                <h5 className="font-bold text-gray-900 text-sm">30-Day Guarantee</h5>
                <p className="text-xs text-gray-600">Full refund if you're not satisfied.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
              <Lock className="text-blue-600 mt-1" size={24} shrink-0 />
              <div>
                <h5 className="font-bold text-gray-900 text-sm">Secure Payment</h5>
                <p className="text-xs text-gray-600">Encrypted and safe transaction.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Payment Form */}
        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Details</h2>
          
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold border-2 border-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <CreditCard size={20} /> Credit Card
            </button>
            <button className="flex-1 bg-white text-gray-900 py-4 rounded-2xl font-bold border-2 border-gray-200 hover:border-gray-900 transition-colors">
              PayPal
            </button>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cardholder Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
              <div className="relative">
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all pl-12" />
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                <input type="text" placeholder="MM/YY" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">CVC</label>
                <input type="text" placeholder="123" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" />
              </div>
            </div>
            
            <div className="pt-6">
              <button type="button" className="w-full bg-secondary text-white font-bold py-5 rounded-2xl text-lg hover:bg-secondary/90 transition-all shadow-lg hover:-translate-y-1">
                Pay $83.00 & Enroll
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              By confirming your purchase, you agree to our Terms of Service.
            </p>
          </form>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
