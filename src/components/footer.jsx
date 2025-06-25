import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
       
        <p className="text-sm">&copy; {new Date().getFullYear()} Hashim Dev. All rights reserved.</p>
        
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/ChHashim88" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="www.linkedin.com/in/hashim-dawood-a8aab3277" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="mailto:ch.hashimdawood858@gmail.com" className="hover:text-blue-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
