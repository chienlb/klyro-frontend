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
import Navbar from './components/Navbar';
import ChatbotWidget from './components/ChatbotWidget';
import './App.css';

function App() {
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
      </Routes>
      <ChatbotWidget />
    </Router>
  );
}

export default App;
