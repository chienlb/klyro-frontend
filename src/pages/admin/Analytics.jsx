import { BarChart3, PieChart, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Analytics() {
  const metrics = [
    { label: 'Active Learners', value: '4,521', trend: '+12%', isPositive: true },
    { label: 'Avg Session Length', value: '24m', trend: '+5%', isPositive: true },
    { label: 'Bounce Rate', value: '42%', trend: '-2%', isPositive: true },
    { label: 'Completion Rate', value: '68%', trend: '-4%', isPositive: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">Deep dive into user engagement and platform performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Calendar size={18} />
            Last 30 Days
          </button>
          <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm font-bold text-gray-500 mb-2">{metric.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-gray-900">{metric.value}</h3>
              <div className={`flex items-center gap-1 text-sm font-bold ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {metric.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              Traffic Overview
            </h3>
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center bg-gray-50">
            <p className="text-gray-400 font-medium">Traffic Chart Placeholder</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <PieChart size={20} className="text-secondary" />
              User Demographics
            </h3>
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center bg-gray-50">
            <p className="text-gray-400 font-medium">Demographics Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
