import { Users, BookOpen, Activity, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Total Users', value: '12,345', icon: Users, change: '+12%', color: 'bg-blue-500' },
    { name: 'Active Subscriptions', value: '8,234', icon: Activity, change: '+5%', color: 'bg-green-500' },
    { name: 'Lessons Completed', value: '142,300', icon: BookOpen, change: '+18%', color: 'bg-purple-500' },
    { name: 'Revenue', value: '$45,231', icon: TrendingUp, change: '+22%', color: 'bg-yellow-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back, here's what's happening with your platform today.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
          Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <span className="text-green-500 bg-green-50 px-2.5 py-1 rounded-lg text-sm font-bold">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-500 font-medium text-sm mb-1">{stat.name}</h3>
              <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Analytics</h3>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center bg-gray-50">
            <p className="text-gray-400 font-medium">Chart visualization will be here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Signups</h3>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center bg-gray-50">
             <p className="text-gray-400 font-medium">User list will be here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
