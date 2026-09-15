import { useState } from 'react';
import { Save, Globe, Lock, Bell, ToggleLeft, Wrench, MessageSquare, AlertTriangle, Users } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'General Settings', icon: Globe },
    { id: 'features', name: 'Feature Toggles', icon: ToggleLeft },
    { id: 'maintenance', name: 'Maintenance Mode', icon: Wrench },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'support', name: 'Support Config', icon: MessageSquare },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Platform Settings</h1>
        <p className="text-gray-500 mt-1">Manage all global configurations, features, and platform status.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 shrink-0">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
            <nav className="p-2 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold text-sm ${
                      isActive 
                        ? 'bg-primary text-white shadow-md shadow-primary/20' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-white' : 'text-gray-400'} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
          <div className="p-8">
            
            {activeTab === 'general' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">General System Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Platform Name</label>
                      <input 
                        type="text" 
                        defaultValue="Klyro Learning"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 focus:bg-white transition-colors font-medium text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">System Email (Sender)</label>
                      <input 
                        type="email" 
                        defaultValue="noreply@klyro.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 focus:bg-white transition-colors font-medium text-gray-900"
                      />
                    </div>
                  </div>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">SEO & Meta</h4>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Site Description (Meta)</label>
                    <textarea 
                      rows="3"
                      defaultValue="The leading online English learning platform..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 focus:bg-white transition-colors font-medium text-gray-900 resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-8 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Feature Toggles</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Allow New Registrations', desc: 'Open signups for new users', default: true },
                    { title: 'Public API', desc: 'Allow developers to generate API Keys', default: true },
                    { title: 'Comment System', desc: 'Enable comments under every lesson', default: false },
                    { title: 'Leaderboards', desc: 'Display global rankings for students', default: true },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100/50 transition-colors">
                      <div>
                        <p className="font-bold text-gray-900">{feat.title}</p>
                        <p className="text-sm text-gray-500">{feat.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={feat.default} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'maintenance' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center shadow-inner">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Maintenance Mode</h3>
                </div>
                
                <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-orange-100/50">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Enable Maintenance</p>
                      <p className="text-sm text-orange-700/80 mt-1">System will be locked for standard users. Admins can still access the platform.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500 shadow-inner"></div>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Maintenance Message (Public)</label>
                      <textarea 
                        rows="3"
                        defaultValue="We are currently upgrading the system to serve you better. Please check back shortly!"
                        className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white transition-colors font-medium text-gray-900 resize-none shadow-sm"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Start Time</label>
                      <input 
                        type="datetime-local" 
                        className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white transition-colors font-medium text-gray-900 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Completion Time</label>
                      <input 
                        type="datetime-local" 
                        className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white transition-colors font-medium text-gray-900 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-8 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Alerts & Notifications</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                         <Bell size={20} />
                       </div>
                       <div>
                         <p className="font-bold text-gray-900">Enable Global Banner</p>
                         <p className="text-sm text-gray-500">Display a prominent alert banner across all pages.</p>
                       </div>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Banner Content</label>
                      <input 
                        type="text" 
                        defaultValue="🎉 Welcome to Klyro 2.0! Enjoy a 50% discount on all courses this week."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 focus:bg-white transition-colors font-medium text-gray-900"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <Users size={16} className="text-primary" />
                        Target Audience
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <label className="flex items-center justify-between p-3 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer transition-colors">
                          <span className="font-bold text-primary text-sm">All Users</span>
                          <input type="radio" name="audience" defaultChecked className="text-primary focus:ring-primary w-4 h-4" />
                        </label>
                        <label className="flex items-center justify-between p-3 border-2 border-gray-100 hover:border-gray-200 bg-white rounded-xl cursor-pointer transition-colors">
                          <span className="font-bold text-gray-700 text-sm">Pro Subscribers Only</span>
                          <input type="radio" name="audience" className="text-primary focus:ring-primary w-4 h-4" />
                        </label>
                        <label className="flex items-center justify-between p-3 border-2 border-gray-100 hover:border-gray-200 bg-white rounded-xl cursor-pointer transition-colors">
                          <span className="font-bold text-gray-700 text-sm">Teachers / Admins</span>
                          <input type="radio" name="audience" className="text-primary focus:ring-primary w-4 h-4" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Banner Background Color</label>
                      <div className="flex items-center gap-3">
                        <input type="color" defaultValue="#4f46e5" className="h-12 w-16 rounded-xl cursor-pointer p-1 bg-gray-50 border border-gray-200" />
                        <span className="text-sm font-mono text-gray-500">#4F46E5</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Call-to-action Button (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Shop Now"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 focus:bg-white transition-colors font-medium text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="space-y-8 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Support Portal Configuration</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Support Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="support@klyro.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 focus:bg-white transition-colors font-medium text-gray-900"
                    />
                  </div>
                  
                  <hr className="border-gray-100" />
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="font-bold text-gray-900">Live Chat Widget (Chatbot)</p>
                      <p className="text-sm text-gray-500">Enable the floating chat bubble in the bottom right corner.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button Fixed at bottom */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
              <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5">
                <Save size={20} />
                Save Configuration
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
