import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Play, Check, RefreshCw, PenTool, Mic, Keyboard, Volume2, Info } from 'lucide-react';

// Helper for premium voice
const playPremiumVoice = (text, rate = 0.85) => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    // Look for high-quality English voices
    const premiumVoice = voices.find(v => 
      v.lang.startsWith('en') && (
        v.name.includes('Google US English') || 
        v.name.includes('Google UK English') || 
        v.name.includes('Samantha') || 
        v.name.includes('Daniel') || 
        v.name.includes('Premium') ||
        v.name.includes('Natural')
      )
    );
    
    if (premiumVoice) {
      utterance.voice = premiumVoice;
    } else {
      utterance.lang = 'en-US';
    }
    
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  }
};

// --- SUB-COMPONENTS ---

function IPAChart() {
  const speak = (text) => {
    playPremiumVoice(text, 0.8);
  };

  const vowels = [
    { ipa: 'i:', word: 'sheep', soundTrick: 'eee' }, { ipa: 'ɪ', word: 'ship', soundTrick: 'ih' }, { ipa: 'ʊ', word: 'good', soundTrick: 'oo' }, { ipa: 'u:', word: 'shoot', soundTrick: 'ooo' },
    { ipa: 'e', word: 'bed', soundTrick: 'eh' }, { ipa: 'ə', word: 'teacher', soundTrick: 'uh' }, { ipa: 'ɜ:', word: 'bird', soundTrick: 'err' }, { ipa: 'ɔ:', word: 'door', soundTrick: 'aww' },
    { ipa: 'æ', word: 'cat', soundTrick: 'aa' }, { ipa: 'ʌ', word: 'up', soundTrick: 'uh' }, { ipa: 'ɑ:', word: 'far', soundTrick: 'ahh' }, { ipa: 'ɒ', word: 'on', soundTrick: 'o' }
  ];
  
  const diphthongs = [
    { ipa: 'ɪə', word: 'here', soundTrick: 'eer' }, { ipa: 'eɪ', word: 'wait', soundTrick: 'ay' },
    { ipa: 'ʊə', word: 'tour', soundTrick: 'oor' }, { ipa: 'ɔɪ', word: 'boy', soundTrick: 'oy' }, { ipa: 'əʊ', word: 'show', soundTrick: 'oh' },
    { ipa: 'eə', word: 'hair', soundTrick: 'air' }, { ipa: 'aɪ', word: 'my', soundTrick: 'eye' }, { ipa: 'aʊ', word: 'cow', soundTrick: 'ow' }
  ];

  const consonants = [
    { ipa: 'p', word: 'pea', soundTrick: 'puh' }, { ipa: 'b', word: 'boat', soundTrick: 'buh' }, { ipa: 't', word: 'tea', soundTrick: 'tuh' }, { ipa: 'd', word: 'dog', soundTrick: 'duh' }, { ipa: 'tʃ', word: 'cheese', soundTrick: 'chuh' }, { ipa: 'dʒ', word: 'june', soundTrick: 'juh' }, { ipa: 'k', word: 'car', soundTrick: 'kuh' }, { ipa: 'g', word: 'go', soundTrick: 'guh' },
    { ipa: 'f', word: 'fly', soundTrick: 'fff' }, { ipa: 'v', word: 'video', soundTrick: 'vvv' }, { ipa: 'θ', word: 'think', soundTrick: 'th' }, { ipa: 'ð', word: 'this', soundTrick: 'the' }, { ipa: 's', word: 'see', soundTrick: 'sss' }, { ipa: 'z', word: 'zoo', soundTrick: 'zzz' }, { ipa: 'ʃ', word: 'shall', soundTrick: 'shh' }, { ipa: 'ʒ', word: 'television', soundTrick: 'zh' },
    { ipa: 'm', word: 'man', soundTrick: 'mmm' }, { ipa: 'n', word: 'now', soundTrick: 'nnn' }, { ipa: 'ŋ', word: 'sing', soundTrick: 'ng' }, { ipa: 'h', word: 'hat', soundTrick: 'huh' }, { ipa: 'l', word: 'love', soundTrick: 'lll' }, { ipa: 'r', word: 'red', soundTrick: 'rrr' }, { ipa: 'w', word: 'wet', soundTrick: 'wuh' }, { ipa: 'j', word: 'yes', soundTrick: 'yuh' }
  ];

  const PhonemeBox = ({ item, colorClass }) => (
    <div 
      onClick={() => speak(item.word)}
      className={`p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center border-2 border-transparent hover:border-gray-900 shadow-sm ${colorClass}`}
    >
      <span className="text-3xl font-bold text-gray-900 mb-2">{item.ipa}</span>
      <span className="text-xs text-gray-600 font-medium">{item.word}</span>
      <Volume2 size={14} className="text-gray-400 mt-2 opacity-0 group-hover:opacity-100" />
    </div>
  );

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Interactive IPA Chart</h2>
        <p className="text-gray-600">Click on any phoneme to hear how it's pronounced in a sample word.</p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><div className="w-4 h-4 bg-primary/20 rounded-full"></div> Monophthongs (Vowels)</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {vowels.map((v, i) => <PhonemeBox key={i} item={v} colorClass="bg-primary/10" />)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><div className="w-4 h-4 bg-info/20 rounded-full"></div> Diphthongs (Double Vowels)</h3>
          <div className="grid grid-cols-4 gap-3">
            {diphthongs.map((v, i) => <PhonemeBox key={i} item={v} colorClass="bg-info/10" />)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><div className="w-4 h-4 bg-secondary/20 rounded-full"></div> Consonants</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {consonants.map((c, i) => <PhonemeBox key={i} item={c} colorClass="bg-secondary/10" />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dictation() {
  const [inputText, setInputText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const targetSentence = "The global economy is expected to recover steadily over the next few quarters, despite ongoing supply chain disruptions.";
  
  const playAudio = () => {
    playPremiumVoice(targetSentence, 0.9);
  };

  const getDiff = () => {
    const targetWords = targetSentence.replace(/[.,]/g, '').toLowerCase().split(' ');
    const inputWords = inputText.replace(/[.,]/g, '').toLowerCase().split(' ');
    
    return targetWords.map((word, idx) => {
      const isMatch = inputWords[idx] === word;
      return (
        <span key={idx} className={`inline-block mr-1 ${isMatch ? 'text-green-600' : 'text-red-500 line-through'}`}>
          {inputWords[idx] || '___'}
        </span>
      );
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dictation Practice</h2>
        <p className="text-gray-600">Listen carefully and type exactly what you hear. Punctuation is ignored.</p>
      </div>

      <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
        <div className="flex justify-center mb-8">
          <button onClick={playAudio} className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-secondary/30">
            <Play fill="currentColor" size={32} className="ml-2" />
          </button>
        </div>

        <textarea 
          value={inputText}
          onChange={(e) => { setInputText(e.target.value); setIsChecked(false); }}
          placeholder="Type what you hear here..."
          className="w-full h-40 p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none resize-none text-lg transition-all"
        ></textarea>

        <div className="mt-6 flex justify-between items-center">
          <button 
            onClick={() => setInputText('')}
            className="text-gray-500 font-bold hover:text-gray-900 flex items-center gap-2"
          >
            <RefreshCw size={18} /> Clear
          </button>
          <button 
            onClick={() => setIsChecked(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-800 transition-colors"
          >
            Check Answer
          </button>
        </div>

        {isChecked && (
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Check className="text-green-500" /> Results Analysis</h4>
            <div className="text-lg mb-6 leading-relaxed">
              <strong>Your Input: </strong> {getDiff()}
            </div>
            <div className="text-lg leading-relaxed text-gray-700">
              <strong>Correct Answer: </strong> {targetSentence}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WritingPractice() {
  const [text, setText] = useState('');
  const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="animate-fade-in flex flex-col h-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Writing Task 2 (IELTS)</h2>
          <p className="text-gray-600">Minimum 250 words.</p>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-mono font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-gray-900'}`}>
            {formatTime(timeLeft)}
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Time Remaining</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Prompt */}
        <div className="lg:w-1/3 bg-white border border-gray-200 text-gray-900 rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 flex flex-col">
          <div className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider mb-6">
            <Info size={16} /> Prompt
          </div>
          <p className="text-lg text-gray-800 font-medium leading-relaxed mb-8 flex-1">
            "Some people believe that unpaid community service should be a compulsory part of high school programs (for example, working for a charity, improving the neighborhood, or teaching sports to younger children). To what extent do you agree or disagree?"
          </p>
          <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm text-gray-600">
            <strong className="text-gray-900">Tips:</strong> Make sure to state your position clearly in the introduction and support it with relevant examples.
          </div>
        </div>

        {/* Editor */}
        <div className="lg:w-2/3 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col overflow-hidden">
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start writing your essay here..."
            className="flex-1 w-full p-8 resize-none outline-none text-lg text-gray-800 leading-relaxed"
          ></textarea>
          <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-between items-center px-8">
            <div className="flex gap-6">
              <span className={`font-bold text-sm ${wordCount < 250 ? 'text-orange-500' : 'text-green-600'}`}>
                {wordCount} / 250 words
              </span>
            </div>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all flex items-center gap-2">
              <Check size={18} /> Submit to AI Evaluation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---

export default function PracticeHub() {
  const [activeTab, setActiveTab] = useState('ipa');

  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-32">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-8 px-4">Practice Hub</h1>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('ipa')}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-4 transition-all ${
                  activeTab === 'ipa' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Mic size={20} /> IPA Chart
              </button>
              <button 
                onClick={() => setActiveTab('dictation')}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-4 transition-all ${
                  activeTab === 'dictation' ? 'bg-white shadow-md text-secondary' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Keyboard size={20} /> Dictation
              </button>
              <button 
                onClick={() => setActiveTab('writing')}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-4 transition-all ${
                  activeTab === 'writing' ? 'bg-white shadow-md text-info' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <PenTool size={20} /> Writing
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-h-[600px]">
          {activeTab === 'ipa' && <IPAChart />}
          {activeTab === 'dictation' && <Dictation />}
          {activeTab === 'writing' && <WritingPractice />}
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
}
