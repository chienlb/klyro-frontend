import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSearchParams } from 'react-router-dom';
import { Volume2, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const vocabData = {
  toeic: [
    { word: 'Accommodate', pos: 'verb', meaning: 'To provide with something desired or needed', example: 'The hotel can accommodate up to 500 guests.' },
    { word: 'Implement', pos: 'verb', meaning: 'To put into effect', example: 'The company decided to implement the new policy.' },
    { word: 'Negotiate', pos: 'verb', meaning: 'To confer with another so as to arrive at the settlement of some matter', example: 'They are trying to negotiate a ceasefire.' },
    { word: 'Analyze', pos: 'verb', meaning: 'To examine methodically and in detail', example: 'We need to analyze the data before making a decision.' },
    { word: 'Revenue', pos: 'noun', meaning: 'Income, especially when of a company or organization and of a substantial nature', example: 'The company\'s revenue increased by 20% this quarter.' }
  ],
  ielts: [
    { word: 'Ubiquitous', pos: 'adj', meaning: 'Present, appearing, or found everywhere', example: 'Computers are now ubiquitous in modern life.' },
    { word: 'Mitigate', pos: 'verb', meaning: 'Make less severe, serious, or painful', example: 'Drainage schemes have helped to mitigate this problem.' },
    { word: 'Paradigm', pos: 'noun', meaning: 'A typical example or pattern of something', example: 'There is a new paradigm for public art in this country.' }
  ]
};

export default function Study() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'toeic';
  const words = vocabData[category] || vocabData['toeic'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [masteredWords, setMasteredWords] = useState([]);

  const currentWord = words[currentIndex];

  const nextWord = () => {
    setShowMeaning(false);
    setCurrentIndex((prev) => (prev + 1) % words.length);
  };

  const prevWord = () => {
    setShowMeaning(false);
    setCurrentIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  const toggleMastered = (idx) => {
    if (masteredWords.includes(idx)) {
      setMasteredWords(masteredWords.filter(i => i !== idx));
    } else {
      setMasteredWords([...masteredWords, idx]);
    }
  };

  return (
    <div className="main-container bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto w-full px-10 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar: Word List */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-10 max-h-[80vh] flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-2">{category} Vocab</h2>
            <div className="text-sm text-gray-500 mb-6 font-medium">Progress: {masteredWords.length} / {words.length} Mastered</div>
            
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
              <div className="bg-secondary h-2 rounded-full transition-all" style={{ width: `${(masteredWords.length / words.length) * 100}%` }}></div>
            </div>

            <ul className="overflow-y-auto space-y-2 flex-1 pr-2">
              {words.map((w, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => { setCurrentIndex(idx); setShowMeaning(false); }}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between font-medium transition-colors ${currentIndex === idx ? 'bg-primary text-white shadow-md shadow-primary/20' : 'hover:bg-gray-50 text-gray-700'}`}
                  >
                    <span>{w.word}</span>
                    {masteredWords.includes(idx) && <CheckCircle size={16} className={currentIndex === idx ? 'text-white' : 'text-secondary'} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Area: Flashcard */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-center justify-center">
          
          <div 
            className="w-full max-w-2xl bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 p-12 min-h-[500px] flex flex-col justify-center relative cursor-pointer border border-gray-100 hover:shadow-2xl transition-shadow" 
            onClick={() => setShowMeaning(!showMeaning)}
          >
            <div className="absolute top-8 right-8 text-gray-400 font-bold bg-gray-50 px-4 py-2 rounded-full text-sm border border-gray-100">
              {currentIndex + 1} / {words.length}
            </div>
            
            <div className="text-center">
              <h2 className="text-6xl font-extrabold text-gray-900 mb-6">{currentWord.word}</h2>
              <div className="flex items-center justify-center gap-3 text-secondary mb-10">
                <span className="italic font-medium text-lg px-3 py-1 bg-secondary/10 rounded-lg">({currentWord.pos})</span>
                <button 
                  className="p-3 hover:bg-secondary/10 rounded-full transition-colors text-secondary" 
                  onClick={(e) => { e.stopPropagation(); alert('Audio play placeholder'); }}
                >
                  <Volume2 size={24} />
                </button>
              </div>

              {showMeaning ? (
                <div className="animate-fade-in">
                  <p className="text-2xl text-gray-800 font-medium mb-8 leading-relaxed">{currentWord.meaning}</p>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-left relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <p className="text-gray-600 italic text-lg leading-relaxed">"{currentWord.example}"</p>
                  </div>
                </div>
              ) : (
                <div className="mt-16 text-gray-400 font-medium flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                     <span className="text-xl">👆</span>
                  </div>
                  Click card to flip
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-6 mt-10 w-full max-w-2xl justify-between items-center">
            <button onClick={prevWord} className="bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full transition-colors shadow-sm border border-gray-100 font-bold flex items-center gap-2">
              <ChevronLeft size={24} /> Prev
            </button>
            
            <button 
              onClick={() => toggleMastered(currentIndex)}
              className={`px-6 py-3 rounded-full font-bold shadow-sm transition-colors border ${masteredWords.includes(currentIndex) ? 'bg-secondary text-white border-secondary' : 'bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary'}`}
            >
              {masteredWords.includes(currentIndex) ? 'Marked as Mastered' : 'Mark as Mastered'}
            </button>

            <button onClick={nextWord} className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-colors font-bold flex items-center gap-2">
              Next <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
