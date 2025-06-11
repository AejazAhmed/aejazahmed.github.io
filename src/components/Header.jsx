// src/components/Header.jsx
'use client';
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'; // Import icons

const Header = ({ portfolioName, navLinks, smoothScroll, contactInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
          {portfolioName}
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => smoothScroll(e, link.toLowerCase())} className="text-gray-300 hover:text-purple-400 transition-colors">
              {link}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => smoothScroll(e, link.toLowerCase())} className="block py-3 px-6 text-center hover:bg-slate-700 transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
