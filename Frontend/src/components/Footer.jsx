import React from 'react'
import "../styles/Footer.css";
const Footer = () => {
    return (
      
      <footer className="w-full bg-gradient-to-r from-green-500 to-white text-gray-800 py-6 flex flex-col items-center">
        <div className="footer-main">
        <p className="text-lg font-semibold">EcoTech Solutions</p>
        <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex gap-4 mt-3">
          <a href="#" className="text-green-700 hover:text-green-900 transition">Privacy Policy</a>
          <a href="#" className="text-green-700 hover:text-green-900 transition">Terms of Service</a>
        </div>
        </div>
      </footer>
    );
  };

export default Footer