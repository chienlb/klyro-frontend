import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, User, ChevronRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "10 Secret TOEIC Listening Strategies",
      category: "TOEIC",
      excerpt: "Boost your listening score with these proven strategies that test-takers use to anticipate answers before the audio even begins.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
      author: "Emma Wilson",
      date: "Oct 12, 2026",
      readTime: "5 min read",
      color: "text-secondary"
    },
    {
      title: "How to Structure an IELTS Band 8 Essay",
      category: "IELTS",
      excerpt: "The difference between a 6.5 and an 8.0 often lies in structure, not just vocabulary. Learn the exact template examiners look for.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
      author: "David Chen",
      date: "Oct 10, 2026",
      readTime: "8 min read",
      color: "text-info"
    },
    {
      title: "Overcoming Speaking Anxiety in Job Interviews",
      category: "General English",
      excerpt: "Nervous about speaking English under pressure? Here are actionable tips to project confidence and fluency.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
      author: "Sarah Jenkins",
      date: "Oct 05, 2026",
      readTime: "6 min read",
      color: "text-primary"
    },
    {
      title: "Top 50 Business English Idioms You Must Know",
      category: "Business",
      excerpt: "From 'touch base' to 'moving the needle', master these idioms to sound like a native in the corporate world.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      author: "Kenji Sato",
      date: "Oct 01, 2026",
      readTime: "10 min read",
      color: "text-accent"
    },
    {
      title: "Why Grammar Rules Matter Less Than You Think",
      category: "Learning Tips",
      excerpt: "A deep dive into natural language acquisition and why consuming content is better than memorizing textbooks.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop",
      author: "Dr. Aisha Patel",
      date: "Sep 28, 2026",
      readTime: "7 min read",
      color: "text-primary"
    },
    {
      title: "Klyro Platform Updates: New AI Scoring Engine",
      category: "News",
      excerpt: "We've completely overhauled our AI speech recognition. Find out how it delivers more accurate pronunciation feedback.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop",
      author: "Product Team",
      date: "Sep 20, 2026",
      readTime: "3 min read",
      color: "text-secondary"
    }
  ];

  return (
    <div className="main-container bg-cream min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Hero */}
      <div className="pt-32 pb-16 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">Stories & Updates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">Expert advice, study strategies, and the latest news from the Klyro team to help you master English.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-900 text-white font-bold text-sm shadow-md">All Posts</button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-bold text-sm hover:bg-gray-200 transition-colors">TOEIC & IELTS</button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-bold text-sm hover:bg-gray-200 transition-colors">Study Tips</button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-bold text-sm hover:bg-gray-200 transition-colors">Company News</button>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="bg-white rounded-[3rem] p-4 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row gap-8 mb-20 group cursor-pointer hover:-translate-y-2 transition-transform duration-500">
          <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[400px] rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:pr-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm rounded-full w-max mb-6">Featured</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-primary transition-colors">The Ultimate Guide to Passing the TOEIC Exam in 30 Days</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Cramming doesn't work, but strategic preparation does. Here is a day-by-day blueprint designed by expert linguists to maximize your score in the shortest time possible.</p>
            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2"><User size={16}/> Sarah Jenkins</div>
              <div className="flex items-center gap-2"><Clock size={16}/> 12 min read</div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-5 border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:${post.color} transition-colors leading-snug`}>{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-gray-900">{post.author}</p>
                      <p className="text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors">
            Load More Articles
          </button>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
