import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Award, BookOpen, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    certification: '',
    level: '',
    time: ''
  });

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    setTimeout(() => {
      if (step < 4) {
        setStep(step + 1);
      } else {
        // Final step complete, go to profile
        navigate('/profile');
      }
    }, 400); // Small delay for UX so they see the selection
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="text-center mb-10">
          <img src="/src/assets/logo.png" alt="Klyro Logo" className="h-20 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Personalize Your Journey</h2>
          <p className="text-gray-500 mt-2 text-lg">Help us tailor your learning experience.</p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${step >= num ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                {num}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-white py-12 px-10 shadow-2xl shadow-gray-200/50 sm:rounded-[3rem] border border-gray-100 min-h-[400px] flex flex-col justify-center">
          
          {/* Step 1 */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Target size={32} /></div>
                <h3 className="text-3xl font-bold text-gray-900">What is your primary goal?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Study Abroad', 'Career Advancement', 'Graduation Requirement', 'Personal Enrichment'].map(option => (
                  <button 
                    key={option}
                    onClick={() => handleSelect('goal', option)}
                    className={`p-6 rounded-2xl border-2 text-left text-lg font-semibold transition-all hover:border-primary hover:bg-primary/5 ${answers.goal === option ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-700'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-info/10 p-4 rounded-2xl text-info"><Award size={32} /></div>
                <h3 className="text-3xl font-bold text-gray-900">Which certification do you need?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['TOEIC', 'IELTS', 'VSTEP', 'TOEFL iBT', 'Cambridge (FCE/CAE)', 'No specific cert'].map(option => (
                  <button 
                    key={option}
                    onClick={() => handleSelect('certification', option)}
                    className={`p-6 rounded-2xl border-2 text-left text-lg font-semibold transition-all hover:border-info hover:bg-info/5 ${answers.certification === option ? 'border-info bg-info/5 text-info' : 'border-gray-100 text-gray-700'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-secondary/10 p-4 rounded-2xl text-secondary"><BookOpen size={32} /></div>
                <h3 className="text-3xl font-bold text-gray-900">What's your current level?</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Beginner', desc: 'I know some basic words and phrases.' },
                  { title: 'Intermediate', desc: 'I can communicate in familiar situations.' },
                  { title: 'Advanced', desc: 'I can express myself fluently and spontaneously.' }
                ].map(option => (
                  <button 
                    key={option.title}
                    onClick={() => handleSelect('level', option.title)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all hover:border-secondary hover:bg-secondary/5 flex flex-col ${answers.level === option.title ? 'border-secondary bg-secondary/5' : 'border-gray-100'}`}
                  >
                    <span className={`text-xl font-bold mb-1 ${answers.level === option.title ? 'text-secondary' : 'text-gray-900'}`}>{option.title}</span>
                    <span className="text-gray-500">{option.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/20 p-4 rounded-2xl text-accent"><Clock size={32} /></div>
                <h3 className="text-3xl font-bold text-gray-900">Daily time commitment?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['15 mins', '30 mins', '1+ hours'].map(option => (
                  <button 
                    key={option}
                    onClick={() => handleSelect('time', option)}
                    className={`p-6 rounded-2xl border-2 text-center text-lg font-bold transition-all hover:border-yellow-500 hover:bg-yellow-50 flex flex-col items-center justify-center gap-2 h-32 ${answers.time === option ? 'border-yellow-500 bg-yellow-50 text-yellow-600' : 'border-gray-100 text-gray-700'}`}
                  >
                    {answers.time === option ? <CheckCircle2 size={32} /> : null}
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
