import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Study from './pages/Study';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Community from './pages/Community';
import Onboarding from './pages/Onboarding';
import Contact from './pages/Contact';
import ApiDocs from './pages/ApiDocs';
import HelpCenter from './pages/HelpCenter';
import Enrolment from './pages/Enrolment';
import LessonView from './pages/LessonView';
import Blog from './pages/Blog';
import PracticeHub from './pages/PracticeHub';
import StudentVouchers from './pages/StudentVouchers';
import Notifications from './pages/Notifications';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Analytics from './pages/admin/Analytics';
import UsersManagement from './pages/admin/UsersManagement';
import ContentManagement from './pages/admin/ContentManagement';
import Billing from './pages/admin/Billing';
import AdminVouchers from './pages/admin/Vouchers';
import Support from './pages/admin/Support';
import Settings from './pages/admin/Settings';
import Navbar from './components/Navbar';
import ChatbotWidget from './components/ChatbotWidget';
import './App.css';

function App() {
  const isComingSoonMode = true; // Toggle this to false when you want to launch the website

  if (isComingSoonMode) {
    return (
      <Router>
        <Routes>
          {/* Catch all public routes and show Coming Soon */}
          <Route path="*" element={<ComingSoon />} />
          
          {/* Keep Admin Dashboard accessible for internal management */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="content" element={<ContentManagement />} />
            <Route path="billing" element={<Billing />} />
            <Route path="vouchers" element={<AdminVouchers />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/study" element={<Study />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/docs" element={<ApiDocs />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/enrolment" element={<Enrolment />} />
        <Route path="/lesson" element={<LessonView />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/practice" element={<PracticeHub />} />
        <Route path="/vouchers" element={<StudentVouchers />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<UsersManagement />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="billing" element={<Billing />} />
          <Route path="vouchers" element={<AdminVouchers />} />
          <Route path="support" element={<Support />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatbotWidget />
    </Router>
  );
}

export default App;
