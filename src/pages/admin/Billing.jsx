import { CreditCard, DollarSign, Download, ExternalLink } from 'lucide-react';

export default function Billing() {
  const transactions = [
    { id: 'TRX-1029', user: 'Alex Johnson', plan: 'Pro Annual', amount: '$120.00', status: 'Completed', date: 'Oct 24, 2026' },
    { id: 'TRX-1028', user: 'Sarah Williams', plan: 'Basic Monthly', amount: '$15.00', status: 'Completed', date: 'Oct 23, 2026' },
    { id: 'TRX-1027', user: 'Michael Brown', plan: 'Pro Monthly', amount: '$25.00', status: 'Failed', date: 'Oct 22, 2026' },
    { id: 'TRX-1026', user: 'Emily Davis', plan: 'Basic Annual', amount: '$90.00', status: 'Refunded', date: 'Oct 20, 2026' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Billing & Revenue</h1>
          <p className="text-gray-500 mt-1">Manage subscriptions, payouts, and financial records.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
          <Download size={18} />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white shadow-lg shadow-primary/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <DollarSign size={20} />
            </div>
            <h3 className="font-bold text-white/90">MRR</h3>
          </div>
          <p className="text-4xl font-black mb-2">$12,450</p>
          <p className="text-sm text-white/80 font-medium">+8% from last month</p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <CreditCard size={20} />
            </div>
            <h3 className="font-bold text-gray-600">Active Subs</h3>
          </div>
          <p className="text-4xl font-black text-gray-900 mb-2">1,204</p>
          <p className="text-sm text-green-500 font-bold">+125 this week</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
              <DollarSign size={20} />
            </div>
            <h3 className="font-bold text-gray-600">Lifetime Value</h3>
          </div>
          <p className="text-4xl font-black text-gray-900 mb-2">$425</p>
          <p className="text-sm text-gray-400 font-medium">Avg per user</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{tx.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{tx.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{tx.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      tx.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      tx.status === 'Failed' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-primary transition-colors p-1">
                      <ExternalLink size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
