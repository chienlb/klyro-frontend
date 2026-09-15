import { Tag, Plus, Copy, Trash2, Calendar, Percent } from 'lucide-react';

export default function AdminVouchers() {
  const vouchers = [
    { id: 1, code: 'SUMMER2026', discount: '20%', type: 'Percentage', usage: '145 / 500', status: 'Active', expiry: 'Oct 30, 2026' },
    { id: 2, code: 'NEWBIE50', discount: '$50', type: 'Fixed Amount', usage: '12 / 100', status: 'Active', expiry: 'Dec 31, 2026' },
    { id: 3, code: 'BLACKFRIDAY', discount: '50%', type: 'Percentage', usage: '500 / 500', status: 'Expired', expiry: 'Nov 25, 2025' },
    { id: 4, code: 'PROYEARLY', discount: '15%', type: 'Percentage', usage: '43 / 1000', status: 'Active', expiry: 'No Expiry' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Voucher Management</h1>
          <p className="text-gray-500 mt-1">Create and manage discount codes for students.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
          <Plus size={20} />
          Create New Voucher
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center">
            <Tag size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Active Vouchers</p>
            <p className="text-2xl font-black text-gray-900">12</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
            <Percent size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Total Discount Given</p>
            <p className="text-2xl font-black text-gray-900">$4,520</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Expiring Soon</p>
            <p className="text-2xl font-black text-gray-900">3</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Vouchers List</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Code</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Discount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Usage</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Expiry</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {vouchers.map((v) => (
                <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">{v.code}</span>
                      <button className="text-gray-400 hover:text-primary transition-colors"><Copy size={14} /></button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">{v.discount}</span>
                    <span className="text-xs text-gray-500 block">{v.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                    {v.usage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      v.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                    {v.expiry}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <Trash2 size={18} />
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
