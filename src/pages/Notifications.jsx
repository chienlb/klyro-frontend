import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bell, Gift, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Notifications() {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'promo',
      icon: Gift,
      title: 'Giảm 50% toàn bộ khóa học TOEIC',
      message: 'Chào mừng sự kiện Klyro 2.0. Sử dụng mã EARLYBIRD để nhận ngay ưu đãi.',
      time: '2 hours ago',
      read: false,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50'
    },
    {
      id: 2,
      type: 'system',
      icon: AlertCircle,
      title: 'Bảo trì hệ thống định kỳ',
      message: 'Hệ thống sẽ bảo trì từ 2:00 AM đến 4:00 AM ngày mai để nâng cấp server.',
      time: '5 hours ago',
      read: false,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 3,
      type: 'course',
      icon: BookOpen,
      title: 'Bài học mới đã được mở',
      message: 'Unit 5: Business Ethics trong khóa học TOEIC Intensive đã sẵn sàng. Vào học ngay!',
      time: '1 day ago',
      read: true,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      type: 'course',
      icon: CheckCircle2,
      title: 'Chúc mừng bạn đã hoàn thành bài thi!',
      message: 'Bạn đạt 850 điểm trong bài thi thử TOEIC Mock Test #3. Xem chi tiết điểm số.',
      time: '2 days ago',
      read: true,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  const filteredNotifs = filter === 'all' ? notifications : notifications.filter(n => n.read === (filter === 'read'));

  return (
    <div className="main-container bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <Bell size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Thông báo</h1>
              <p className="text-gray-500 font-medium">Cập nhật tin tức, khuyến mãi và tiến độ học tập</p>
            </div>
          </div>

          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'all' ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Tất cả
            </button>
            <button 
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${filter === 'unread' ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Chưa đọc
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
          {filteredNotifs.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredNotifs.map((notif) => {
                const Icon = notif.icon;
                return (
                  <div key={notif.id} className={`p-6 hover:bg-gray-50 transition-colors flex gap-4 ${notif.read ? 'opacity-70' : 'bg-primary/5 hover:bg-primary/10'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${notif.bgColor} ${notif.color}`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <h4 className={`text-lg font-bold text-gray-900 ${!notif.read ? 'pr-4 relative' : ''}`}>
                          {notif.title}
                          {!notif.read && <span className="absolute right-0 top-2 w-2 h-2 rounded-full bg-red-500"></span>}
                        </h4>
                        <span className="text-xs font-bold text-gray-400 whitespace-nowrap">{notif.time}</span>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">{notif.message}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Không có thông báo nào</h3>
              <p className="text-gray-500">Bạn đã đọc hết tất cả các thông báo.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
