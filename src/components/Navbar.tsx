import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = "+919430143045"; // Your actual phone number

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="gradient-text">Muskan</span> <span className="text-gray-800">Digital Studio</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-medium text-gray-700 hover:text-indigo-600 transition-colors animated-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${phoneNumber}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 rounded-md px-6 py-2 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card py-2 animate-fade-in">
          <ul className="py-4">
            {navLinks.map((link, index) => (
              <li key={link.name} className="px-6 py-3" style={{ animationDelay: `${index * 0.05}s` }}>
                <a 
                  href={link.href} 
                  className="font-medium text-gray-700 hover:text-indigo-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white w-full flex items-center justify-center gap-2 rounded-md py-2 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
