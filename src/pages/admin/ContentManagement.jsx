import { Book, Plus, Video, FileText } from 'lucide-react';

export default function ContentManagement() {
  const content = [
    { id: 1, title: 'Introduction to English Grammar', type: 'Course', status: 'Published', enrollments: 1245 },
    { id: 2, title: 'Advanced Vocabulary Unit 1', type: 'Lesson', status: 'Draft', enrollments: 0 },
    { id: 3, title: 'TOEIC Listening Practice Test', type: 'Practice', status: 'Published', enrollments: 856 },
    { id: 4, title: 'Business English Basics', type: 'Course', status: 'Published', enrollments: 3420 },
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Course': return <Book size={18} className="text-blue-500" />;
      case 'Lesson': return <Video size={18} className="text-purple-500" />;
      case 'Practice': return <FileText size={18} className="text-green-500" />;
      default: return <Book size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Content Management</h1>
          <p className="text-gray-500 mt-1">Manage courses, lessons, and practice materials.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
          <Plus size={20} />
          Create Content
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Content Cards */}
        {content.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                {getTypeIcon(item.type)}
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${item.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {item.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-500 font-medium mb-4">{item.type}</p>
            
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-sm font-medium text-gray-600">
                <strong className="text-gray-900">{item.enrollments}</strong> enrollments
              </div>
              <button className="text-primary font-bold text-sm hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                Edit
              </button>
            </div>
          </div>
        ))}
        
        {/* Add New Card */}
        <button className="bg-gray-50 rounded-3xl p-6 border-2 border-dashed border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors flex flex-col items-center justify-center min-h-[200px] gap-3 group">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
            <Plus size={24} />
          </div>
          <span className="font-bold text-gray-600 group-hover:text-primary transition-colors">Add New Material</span>
        </button>
      </div>
    </div>
  );
}
