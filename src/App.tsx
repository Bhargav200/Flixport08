import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import SocialIcons from './components/SocialIcons';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        {/* Custom cursor */}
        <div 
          className="fixed w-4 h-4 border-2 border-green-400 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
          style={{ 
            left: cursorPosition.x - 8,
            top: cursorPosition.y - 8,
            transform: 'translate(0, 0)',
            mixBlendMode: 'difference'
          }}
        />
        <div 
          className="fixed w-2 h-2 bg-green-400 rounded-full pointer-events-none z-50 transition-transform duration-150 ease-out"
          style={{ 
            left: cursorPosition.x - 4,
            top: cursorPosition.y - 4,
            transform: 'translate(0, 0)',
            mixBlendMode: 'difference'
          }}
        />
        <Navbar />
        <SocialIcons />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;