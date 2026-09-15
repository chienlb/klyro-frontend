import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Ticket, Search, Info, Scissors } from 'lucide-react';

export default function StudentVouchers() {
  const myVouchers = [
    { code: 'WELCOME10', discount: '10% OFF', desc: 'For your first course enrollment', expiry: 'Dec 31, 2026', color: 'from-blue-500 to-indigo-500' },
    { code: 'TOEICMASTER', discount: '$20 OFF', desc: 'Applicable for TOEIC Intensive course', expiry: 'Nov 15, 2026', color: 'from-orange-400 to-red-500' },
  ];

  return (
    <div className="main-container bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Your Vouchers Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Collect discount codes and apply them instantly for amazing deals on Klyro courses.</p>
        </div>

        {/* Input Code */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/40 border border-gray-100 max-w-2xl mx-auto mb-12 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Enter Promo Code</h3>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Ticket size={20} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Example: KLYRO2026" 
                className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-gray-900 uppercase"
              />
            </div>
            <button className="px-8 py-3.5 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>

        {/* List of Vouchers */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Ticket className="text-primary" /> Available Vouchers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myVouchers.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden group hover:shadow-md transition-all">
                {/* Left decorative edge */}
                <div className={`w-32 bg-gradient-to-br ${v.color} flex flex-col items-center justify-center text-white p-4 relative`}>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 rounded-full"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-10"></div>
                  <PercentIcon />
                  <span className="font-black text-xl text-center leading-tight mt-2">{v.discount}</span>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col border-l border-dashed border-gray-200 relative">
                  <div className="absolute -top-2 -bottom-2 -left-px border-l-2 border-dashed border-gray-100 z-0"></div>
                  
                  <div className="relative z-10 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 font-mono bg-gray-100 inline-block px-2 py-0.5 rounded border border-gray-200 mb-2">{v.code}</h4>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{v.desc}</p>
                  </div>
                  
                  <div className="relative z-10 mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-500">Expires: {v.expiry}</p>
                    <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                      Use Now <Scissors size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
            <Info className="text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed font-medium">
              Vouchers are only applicable to your account and cannot be redeemed for cash. If you encounter any issues applying a code, please contact our support team.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

function PercentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19"></line>
      <circle cx="6.5" cy="6.5" r="2.5"></circle>
      <circle cx="17.5" cy="17.5" r="2.5"></circle>
    </svg>
  );
}
