import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full px-10 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Upgrade Your Learning</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">Choose the plan that fits your goals. Unlock premium features and accelerate your path to English mastery.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
            <p className="text-gray-500 mb-6">Perfect for getting started.</p>
            <div className="text-5xl font-extrabold text-gray-900 mb-8">$0<span className="text-xl text-gray-500 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-10 text-left flex-1">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle size={20} className="text-gray-400" /> Access to 500 Basic Words</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle size={20} className="text-gray-400" /> Standard Flashcards</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium opacity-50"><CheckCircle size={20} className="text-gray-300" /> No Mock Tests</li>
            </ul>
            <button className="w-full py-4 rounded-full font-bold text-lg border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors">Current Plan</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-primary rounded-[3rem] p-10 shadow-2xl shadow-primary/30 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-gray-900 px-6 py-2 rounded-full text-sm font-extrabold shadow-lg tracking-wide uppercase">MOST POPULAR</div>
            <h3 className="text-2xl font-bold text-white mb-2 mt-2">Pro</h3>
            <p className="text-white/80 mb-6">For serious learners.</p>
            <div className="text-5xl font-extrabold text-white mb-8">$12<span className="text-xl text-white/70 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-10 text-left flex-1">
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle size={20} className="text-accent" /> Unlimited Vocabulary</li>
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle size={20} className="text-accent" /> Smart Spaced Repetition</li>
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle size={20} className="text-accent" /> 5 Mock Tests / Month</li>
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle size={20} className="text-accent" /> Priority Support</li>
            </ul>
            <button className="w-full py-4 rounded-full font-bold text-lg bg-white text-primary shadow-lg hover:shadow-xl transition-shadow">Upgrade to Pro</button>
          </div>

          {/* Lifetime Plan */}
          <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lifetime</h3>
            <p className="text-gray-500 mb-6">Pay once, learn forever.</p>
            <div className="text-5xl font-extrabold text-gray-900 mb-8">$199<span className="text-xl text-gray-500 font-medium">/once</span></div>
            <ul className="space-y-4 mb-10 text-left flex-1">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle size={20} className="text-info" /> Everything in Pro</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle size={20} className="text-info" /> Unlimited Mock Tests</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle size={20} className="text-info" /> Expert Essay Grading</li>
            </ul>
            <button className="w-full py-4 rounded-full font-bold text-lg border-2 border-info text-info hover:bg-info hover:text-white transition-colors">Get Lifetime Access</button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-32 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Compare Features</h2>
          <div className="overflow-x-auto bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 font-bold text-gray-900 w-1/3">Features</th>
                  <th className="p-6 font-bold text-gray-900 text-center w-2/9">Basic</th>
                  <th className="p-6 font-bold text-primary text-center w-2/9">Pro</th>
                  <th className="p-6 font-bold text-info text-center w-2/9">Lifetime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: 'Core Vocabulary (500 words)', basic: true, pro: true, lifetime: true },
                  { feature: 'Unlimited Categories', basic: false, pro: true, lifetime: true },
                  { feature: 'Smart Spaced Repetition', basic: false, pro: true, lifetime: true },
                  { feature: 'Audio Pronunciations', basic: true, pro: true, lifetime: true },
                  { feature: 'Mock Exams', basic: false, pro: '5 / month', lifetime: 'Unlimited' },
                  { feature: 'Essay Grading (AI & Expert)', basic: false, pro: false, lifetime: true },
                  { feature: 'Ad-free Experience', basic: false, pro: true, lifetime: true },
                  { feature: 'Support Level', basic: 'Community', pro: 'Priority', lifetime: '1-on-1 Dedicated' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-medium text-gray-700">{row.feature}</td>
                    <td className="p-6 text-center text-gray-500">
                      {typeof row.basic === 'boolean' ? (row.basic ? <CheckCircle className="mx-auto text-gray-400" size={20} /> : <span className="text-gray-300">-</span>) : row.basic}
                    </td>
                    <td className="p-6 text-center text-primary font-medium">
                      {typeof row.pro === 'boolean' ? (row.pro ? <CheckCircle className="mx-auto text-primary" size={20} /> : <span className="text-gray-300">-</span>) : row.pro}
                    </td>
                    <td className="p-6 text-center text-info font-medium">
                      {typeof row.lifetime === 'boolean' ? (row.lifetime ? <CheckCircle className="mx-auto text-info" size={20} /> : <span className="text-gray-300">-</span>) : row.lifetime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
