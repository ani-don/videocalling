import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone, Mail, ChevronDown, Camera, VideotapeIcon, User } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
      <nav className={`fixed w-full transition-all duration-300 ${
        isScrolled 
          ? ' backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group">
                <VideotapeIcon className="h-8 w-8 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
                <span className="fon ml-2 text-xl  font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
             TALKIVE
                </span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group relative px-3 py-2 text-sm font-medium text-red-600 hover:text-white transition-colors"
                  >
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-800/50 focus:outline-none transition-colors duration-200"
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Right Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-black hover:text-black flex items-center space-x-1 group">
                <User className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span className="ml-2">Login</span>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-6 py-2 overflow-hidden rounded-full group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-100 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center text-white">
             Getting started
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-lg bg-black/60`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-purple-800/50 rounded-lg transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-purple-800/30">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">info@talkive.com</div>
                <div className="text-sm font-medium text-purple-400">Get in touch</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

   
      
  );
}

export default App;
