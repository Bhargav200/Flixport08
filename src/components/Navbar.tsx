import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled || isMenuOpen ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
    }`}>
      <div className="px-4 md:px-8 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/logoB.png" alt="Logo" className="h-23 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400 transition relative z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4 md:gap-8">
            <NavLink to="/" current={location.pathname} />
            <NavLink to="/about" current={location.pathname} />
            <NavLink to="/certificates" current={location.pathname} />
            <NavLink to="/contact" current={location.pathname} />
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-black transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden pt-20`}
        >
          <div className="flex flex-col items-center gap-8 p-8">
            <NavLink to="/" current={location.pathname} mobile />
            <NavLink to="/about" current={location.pathname} mobile />
            <NavLink to="/certificates" current={location.pathname} mobile />
            <NavLink to="/contact" current={location.pathname} mobile />
            <Link
              to="/resume"
              className="text-white bg-green-400 px-4 py-2 rounded hover:bg-green-500 transition"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, current, mobile = false }: { to: string; current: string; mobile?: boolean }) => {
  const path = to === '/' ? 'Home' : to.slice(1).charAt(0).toUpperCase() + to.slice(2);
  
  return (
    <Link 
      to={to} 
      className={`transition ${
        mobile ? 'text-2xl' : ''
      } ${
        current === to ? 'text-green-400' : 'text-white hover:text-green-400'
      }`}
    >
      {path}
    </Link>
  );
};

export default Navbar;
