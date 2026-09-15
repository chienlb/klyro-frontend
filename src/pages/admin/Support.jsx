import { MessageSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Support() {
  const tickets = [
    { id: 'TKT-9021', subject: 'Cannot access Lesson 4', user: 'Emily Davis', priority: 'High', status: 'Open', time: '10 mins ago' },
    { id: 'TKT-9020', subject: 'Billing issue - Double charged', user: 'Michael Brown', priority: 'Critical', status: 'In Progress', time: '2 hours ago' },
    { id: 'TKT-9019', subject: 'How to reset my password?', user: 'Alex Johnson', priority: 'Low', status: 'Resolved', time: '1 day ago' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-700';
      case 'High': return 'bg-orange-100 text-orange-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Support Tickets</h1>
          <p className="text-gray-500 mt-1">Manage and respond to user inquiries.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Open Tickets</p>
            <p className="text-2xl font-black text-gray-900">24</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Avg Response Time</p>
            <p className="text-2xl font-black text-gray-900">1.2h</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Resolved Today</p>
            <p className="text-2xl font-black text-gray-900">18</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Recent Inquiries</h3>
          <select className="border border-gray-200 text-gray-700 rounded-xl py-2 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary appearance-none font-medium text-sm">
            <option>All Statuses</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
        
        <div className="divide-y divide-gray-100">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-lg font-bold text-gray-900">{ticket.subject}</h4>
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{ticket.user}</span> • {ticket.id}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <span className="text-sm font-bold text-gray-500">{ticket.time}</span>
                <span className={`text-sm font-bold ${ticket.status === 'Resolved' ? 'text-green-500' : 'text-primary'}`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
