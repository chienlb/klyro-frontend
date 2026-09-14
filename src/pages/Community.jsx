import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { MessageSquare, BookText, HelpCircle, ArrowRight, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How I scored 900+ on the TOEIC in 2 months',
    category: 'experiences',
    author: 'Sarah Jenkins',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop',
    excerpt: 'A detailed breakdown of my daily study routine, including the exact flashcard decks and mock tests I used to skyrocket my score.'
  },
  {
    id: 2,
    title: 'Ultimate IELTS Speaking Part 2 Templates',
    category: 'materials',
    author: 'David Chen',
    date: 'Sep 12, 2026',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Download my free PDF containing 20 versatile templates that can be adapted to almost any speaking cue card.'
  },
  {
    id: 3,
    title: 'Struggling with Listening Section 3 - Help?',
    category: 'qa',
    author: 'Mike Johnson',
    date: 'Sep 14, 2026',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    excerpt: 'I always lose focus during the multiple-speaker conversations. Does anyone have specific note-taking strategies?'
  },
  {
    id: 4,
    title: '100 Essential Phrasal Verbs Flashcard Deck',
    category: 'materials',
    author: 'Emma Wilson',
    date: 'Sep 05, 2026',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    excerpt: 'I compiled the most common phrasal verbs used in formal writing and business contexts. Import this directly to your profile!'
  }
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeTab);

  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary py-24 px-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">Klyro Community</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">Share your experiences, download exclusive study materials, and connect with thousands of learners worldwide.</p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-10 py-16">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'all' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            All Posts
          </button>
          <button 
            onClick={() => setActiveTab('experiences')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center gap-2 ${activeTab === 'experiences' ? 'bg-secondary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <MessageSquare size={20} /> Experiences
          </button>
          <button 
            onClick={() => setActiveTab('materials')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center gap-2 ${activeTab === 'materials' ? 'bg-info text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <BookText size={20} /> Materials
          </button>
          <button 
            onClick={() => setActiveTab('qa')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center gap-2 ${activeTab === 'qa' ? 'bg-accent text-gray-900 shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <HelpCircle size={20} /> Q&A
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Latest Discussions</h2>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-opacity shadow-lg">
            + New Post
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform group cursor-pointer">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  {post.category === 'experiences' && <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Experience</span>}
                  {post.category === 'materials' && <span className="bg-info text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Material</span>}
                  {post.category === 'qa' && <span className="bg-accent text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Question</span>}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-1">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </div>
                  </div>
                  <button className="text-primary hover:text-gray-900 transition-colors p-2 bg-gray-50 rounded-full group-hover:bg-primary group-hover:text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-500">Be the first to share something in this category!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
