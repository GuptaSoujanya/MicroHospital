import './App.css';
import Index from './pages/Index';
import Login from './pages/LoginPage/Login';
import About from './pages/about';
import Contact from './pages/contact';
import Doctor from './pages/doctor';
import Testimonial from './pages/testimonial';
import Treatment from './pages/treatment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/chatbot" element={<Testimonial />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;