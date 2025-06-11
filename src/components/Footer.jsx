// src/components/Footer.jsx
'use client';
import React from 'react';

const Footer = ({ portfolioName }) => {
  return (
    <footer className="bg-slate-800 mt-20">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} {portfolioName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
