import { Terminal, Copy, CheckCircle2, Search, ArrowLeft, Book, Code2, ShieldAlert, Zap, Layers } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ApiDocs() {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(id);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      id: 'get-words',
      method: 'GET',
      path: '/v1/vocabulary',
      title: 'Retrieve Vocabulary',
      description: 'Fetch a list of vocabulary words filtered by course level or category. This is useful for displaying daily words or populating a custom learning interface.',
      response: `{
  "status": "success",
  "data": [
    { 
      "id": "voc_123",
      "word": "abundant", 
      "level": "TOEFL", 
      "meaning": "existing or available in large quantities" 
    },
    { 
      "id": "voc_124",
      "word": "benevolent", 
      "level": "TOEFL", 
      "meaning": "well meaning and kindly" 
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 20
  }
}`
    },
    {
      id: 'post-progress',
      method: 'POST',
      path: '/v1/progress',
      title: 'Update Progress',
      description: 'Update the learning progress for a specific user. Call this endpoint when a user completes a lesson or answers a question correctly.',
      response: `{
  "status": "success",
  "message": "Progress updated successfully.",
  "data": {
    "userId": "usr_12345",
    "courseId": "crs_toeic",
    "progressPercentage": 78,
    "lastActive": "2026-10-24T10:30:00Z"
  }
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans selection:bg-primary/20 selection:text-primary-dark">
      {/* Decorative Gradients (Light mode adjusted) */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 h-16 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 w-64 shrink-0">
          <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm font-bold">
            <ArrowLeft size={16} />
            Back to main site
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm shadow-primary/20">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">Klyro <span className="text-gray-400 font-medium">API</span></span>
          </div>
          <div className="hidden sm:flex relative max-w-md w-full ml-8 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search documentation (Press '/')" 
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all sm:text-sm font-medium text-gray-900"
            />
          </div>
          <div className="flex items-center gap-4 ml-4">
             <button className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-bold transition-colors shadow-sm">
               Developer Login
             </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-[90rem] mx-auto w-full relative z-10">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 shrink-0 border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto custom-scrollbar bg-white/50">
          <nav className="p-6 space-y-8">
            <div>
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">Getting Started</h3>
              <ul className="space-y-1">
                <li><a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-primary bg-primary/10 rounded-xl"><Book size={16} className="text-primary" /> Introduction</a></li>
                <li><a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"><ShieldAlert size={16} /> Authentication</a></li>
                <li><a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"><Zap size={16} /> Rate Limits</a></li>
                <li><a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"><Layers size={16} /> Pagination</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">API Reference</h3>
              <ul className="space-y-2 border-l border-gray-200 ml-4 relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent -translate-x-px"></div>
                {endpoints.map(ep => (
                  <li key={ep.id}>
                    <a href={`#${ep.id}`} className="block pl-5 py-1 text-sm font-medium text-gray-600 hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                      {ep.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 overflow-y-auto bg-white shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)] relative z-20 rounded-tl-3xl lg:rounded-none">
          <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-5xl">
            
            <div className="mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                API Version 2.0 is Live
              </div>
              <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-6">Klyro API Reference</h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Build next-generation language learning applications. Access our vast vocabulary databases, track user progress, and deliver personalized experiences using our RESTful APIs.
              </p>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Base URL</h3>
                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                      <code className="text-primary font-mono text-lg">https://api.klyro.com</code>
                      <button className="text-gray-400 hover:text-gray-700 transition-colors"><Copy size={16}/></button>
                    </div>
                  </div>
                  <div className="h-px md:h-16 w-full md:w-px bg-gray-100"></div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Access</h3>
                    <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
                      Generate API Key
                      <ArrowLeft size={16} className="rotate-135" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100 mb-20" />

            <div className="space-y-32">
              {endpoints.map((ep) => (
                <div key={ep.id} id={ep.id} className="scroll-mt-32">
                  <div className="flex flex-col xl:flex-row gap-12">
                    
                    {/* Endpoint Info */}
                    <div className="xl:w-5/12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{ep.title}</h2>
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wider ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                          {ep.method}
                        </span>
                        <code className="text-sm font-mono text-gray-700 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg">{ep.path}</code>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-8 text-lg">{ep.description}</p>
                      
                      {/* Mock parameters table */}
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Parameters</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <code className="text-primary text-sm font-mono mt-0.5">level</code>
                          <div>
                            <p className="text-gray-900 text-sm font-bold mb-1">string <span className="text-gray-400 font-medium ml-2">Optional</span></p>
                            <p className="text-gray-600 text-sm">Filter vocabulary by CEFR level or test type (e.g., TOEFL, TOEIC).</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Code Snippet (Kept Dark for contrast) */}
                    <div className="xl:w-7/12">
                      <div className="sticky top-32">
                        <div className="relative group/code">
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-2xl blur opacity-30 group-hover/code:opacity-100 transition duration-1000"></div>
                          <div className="relative bg-[#0A0A0A] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
                            {/* Mac window controls */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#141414]">
                              <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                              </div>
                              <span className="text-xs font-mono text-gray-400">Response - 200 OK</span>
                              <button 
                                onClick={() => copyToClipboard(ep.response, ep.id)}
                                className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                              >
                                {copiedEndpoint === ep.id ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} />}
                              </button>
                            </div>
                            <div className="p-6 overflow-x-auto custom-scrollbar">
                              <pre className="text-[13px] font-mono text-gray-300 leading-loose">
                                <code dangerouslySetInnerHTML={{ __html: ep.response
                                  .replace(/"([^"]+)":/g, '<span class="text-[#7dd3fc]">"$1"</span>:')
                                  .replace(/"([^"]+)"(?=[,}])/g, '<span class="text-[#a7f3d0]">"$1"</span>')
                                  .replace(/\b(\d+)\b/g, '<span class="text-[#fca5a5]">$1</span>')
                                }} />
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
