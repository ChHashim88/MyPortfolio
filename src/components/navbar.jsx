import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  function goToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false); 
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hashim
          </div>

          
          <div className="hidden md:flex space-x-8">
            <a
              href="#hero"
              onClick={(e) => goToSection(e, 'hero')}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => goToSection(e, 'about')}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => goToSection(e, 'projects')}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => goToSection(e, 'contact')}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pb-3">
            <a
              onClick={(e) => goToSection(e, 'hero')}
              className="block text-gray-600 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              onClick={(e) => goToSection(e, 'about')}
              className="block text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              onClick={(e) => goToSection(e, 'projects')}
              className="block text-gray-600 hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              onClick={(e) => goToSection(e, 'contact')}
              className="block text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
