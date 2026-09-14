import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetSent, setIsResetSent] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsResetSent(true);
  };

  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl max-w-md w-full border border-gray-100">
          
          {!isForgotPassword ? (
            <div className="animate-in fade-in zoom-in duration-300">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-500">Sign in to continue your learning journey.</p>
              </div>

              <button type="button" className="w-full bg-white border-2 border-gray-100 text-gray-700 font-bold py-4 rounded-full shadow-sm hover:bg-gray-50 hover:border-gray-200 transition-all flex items-center justify-center gap-3 text-lg mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-secondary focus:ring-secondary w-4 h-4" />
                    <span className="text-sm text-gray-600 font-medium">Remember me</span>
                  </label>
                  <button type="button" onClick={() => setIsForgotPassword(true)} className="text-sm text-secondary font-bold hover:underline">Forgot password?</button>
                </div>

                <button type="button" className="w-full bg-gray-900 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all text-lg">
                  Sign In
                </button>
              </form>

              <p className="text-center mt-8 text-gray-600 font-medium">
                Don't have an account? <Link to="/register" className="text-secondary font-bold hover:underline">Sign up</Link>
              </p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              {!isResetSent ? (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Reset Password</h1>
                    <p className="text-gray-500">Enter your email and we'll send you a link.</p>
                  </div>
                  
                  <form className="space-y-6" onSubmit={handleResetPassword}>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input type="email" placeholder="you@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                    </div>
                    
                    <button type="submit" className="w-full bg-secondary text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg">
                      Send Reset Link
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Check your email</h1>
                  <p className="text-gray-500 mb-8">We've sent a password reset link to your email.</p>
                </div>
              )}

              <button type="button" onClick={() => { setIsForgotPassword(false); setIsResetSent(false); }} className="w-full mt-6 bg-gray-50 text-gray-600 font-bold py-4 rounded-full hover:bg-gray-100 transition-all">
                Back to Login
              </button>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
