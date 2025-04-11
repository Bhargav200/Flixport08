import React, { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  const navigate = useNavigate();
  const skills = [
    'AI & ML Engineer',
    'AI Generalist',
    'MERN Stack Developer',
    'Vibe coder',
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* APBRT opening animation */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className={`relative flex gap-1 transition-transform duration-700 ${isLoaded ? 'scale-150' : 'scale-100'}`}>
          <div className="text-green-500 text-6xl font-bold tracking-tighter netflix-animation" style={{ animationDelay: '0s' }}>A</div>
          <div className="text-green-500 text-6xl font-bold tracking-tighter netflix-animation" style={{ animationDelay: '0.1s' }}>P</div>
          <div className="text-green-500 text-6xl font-bold tracking-tighter netflix-animation" style={{ animationDelay: '0.2s' }}>B</div>
          <div className="text-green-500 text-6xl font-bold tracking-tighter netflix-animation" style={{ animationDelay: '0.3s' }}>R</div>
          <div className="text-green-500 text-6xl font-bold tracking-tighter netflix-animation" style={{ animationDelay: '0.4s' }}>T</div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative h-full min-h-screen w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={slide}
                alt={`Hero Background ${index + 1}`}
                className="w-full h-full object-cover brightness-[0.2]"
              />
            </div>
          ))}
        </div>
        <MatrixRain />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent" />
        
        <div className="absolute top-1/2 transform -translate-y-1/2 px-4 md:px-16 w-full">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 delay-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Hi, I'm{' '}
              <span className="text-green-400 block mt-2">A P Bhargav Ravi Teja</span>
            </h1>
            <div className={`h-8 md:h-12 mb-6 md:mb-8 transition-all duration-1000 delay-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <TypeWriter
                text={skills}
                className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide"
                delay={100}
                infinite
              />
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <button 
                onClick={() => navigate('/projects')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <Play size={24} />
                View Projects
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/70 text-white rounded hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <Info size={24} />
                More Info
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-green-500' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Home;
