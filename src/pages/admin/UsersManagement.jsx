import { useState } from 'react';
import { Search, MoreVertical, Edit2, Trash2, Shield, User } from 'lucide-react';

export default function UsersManagement() {
  const [users] = useState([
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Student', status: 'Active', lastActive: '2 hours ago' },
    { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin', status: 'Active', lastActive: '5 mins ago' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Student', status: 'Inactive', lastActive: '3 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Student', status: 'Active', lastActive: '1 hour ago' },
    { id: 5, name: 'James Wilson', email: 'james@example.com', role: 'Teacher', status: 'Active', lastActive: '1 day ago' },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Users Management</h1>
          <p className="text-gray-500 mt-1">Manage users, roles, and permissions across the platform.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search users by name or email..." 
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all sm:text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="border border-gray-200 text-gray-700 rounded-xl py-2.5 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary appearance-none font-medium text-sm">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Teacher</option>
              <option>Student</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Last Active</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      {user.role === 'Admin' ? <Shield size={14} className="text-purple-500" /> : <User size={14} className="text-blue-500" />}
                      <span className="text-sm font-medium text-gray-900">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-primary transition-colors p-1">
                      <Edit2 size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1 ml-2">
                      <Trash2 size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-700 transition-colors p-1 ml-2">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="bg-white px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">5</span> of <span className="font-medium text-gray-900">50</span> results</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
