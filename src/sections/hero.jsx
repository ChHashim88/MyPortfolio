import React from 'react';
import { motion } from 'framer-motion';
import MyPhoto from '../assets/myphoto.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#eef2ff] via-[#f3f4f6] to-[#e0f2fe] px-6"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-20 relative">
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left space-y-6 z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hashim
            </span>
            <br />Full Stack Web Developer
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            I build powerful, modern, and responsive web applications using the MERN stack and cutting-edge tools.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white shadow-md hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center relative z-10"
        >
          {/* Glowing Background */}
          <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl rounded-full opacity-30 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Image Card */}
          <motion.div
            whileHover={{ rotate: [0, 2, -2, 0], scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative w-[300px] h-[400px] sm:w-[340px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white"
          >
            <img
              src={MyPhoto}
              alt="Hashim"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
