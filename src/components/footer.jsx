import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Hashim Dev. All rights reserved.</p>
        
        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="mailto:hashim@example.com" className="hover:text-blue-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
