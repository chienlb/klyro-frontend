import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Terminal, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

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
      description: 'Retrieve a list of vocabulary words based on course level.',
      response: `{
  "status": "success",
  "data": [
    { "word": "abundant", "level": "TOEFL", "meaning": "existing or available in large quantities" },
    { "word": "benevolent", "level": "TOEFL", "meaning": "well meaning and kindly" }
  ]
}`
    },
    {
      id: 'post-progress',
      method: 'POST',
      path: '/v1/progress',
      description: 'Update the learning progress for a specific user.',
      response: `{
  "status": "success",
  "message": "Progress updated successfully.",
  "data": {
    "userId": "usr_12345",
    "courseId": "crs_toeic",
    "progressPercentage": 78
  }
}`
    }
  ];

  return (
    <div className="main-container bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-10">
            <h3 className="font-bold text-gray-900 mb-4 px-2 uppercase tracking-wider text-xs">Getting Started</h3>
            <ul className="space-y-1 mb-8">
              <li><a href="#" className="block px-3 py-2 rounded-lg bg-gray-50 text-secondary font-bold">Introduction</a></li>
              <li><a href="#" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Authentication</a></li>
              <li><a href="#" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Errors</a></li>
            </ul>

            <h3 className="font-bold text-gray-900 mb-4 px-2 uppercase tracking-wider text-xs">Endpoints</h3>
            <ul className="space-y-1">
              <li><a href="#get-words" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Get Vocabulary</a></li>
              <li><a href="#post-progress" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Update Progress</a></li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-12">
          
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Terminal size={24} />
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900">Klyro API Reference</h1>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Welcome to the Klyro API documentation. You can use our API to access vocabulary lists, manage user progress, and integrate our learning engine directly into your own applications.
            </p>
            <div className="bg-gray-900 text-white p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Base URL</p>
                <code className="text-lg font-mono text-secondary">https://api.klyro.com</code>
              </div>
            </div>
          </div>

          {endpoints.map((ep) => (
            <div key={ep.id} id={ep.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 scroll-mt-24">
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-lg text-sm font-bold ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {ep.method}
                  </span>
                  <code className="text-lg font-bold text-gray-900">{ep.path}</code>
                </div>
                <p className="text-gray-600">{ep.description}</p>
              </div>
              
              <div className="bg-gray-900 p-8 relative group">
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => copyToClipboard(ep.response, ep.id)}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    {copiedEndpoint === ep.id ? <><CheckCircle2 size={16} className="text-green-400" /> Copied</> : <><Copy size={16} /> Copy</>}
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-mono">// Example Response</p>
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                  {ep.response}
                </pre>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
}
