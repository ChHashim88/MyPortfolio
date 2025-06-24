import React from 'react';
import { motion } from 'framer-motion';
import MyPhoto from '../assets/myphoto.jpg'; 

const Hero = () => {
  const gridSize = 4;
  const blockSize = 100 / gridSize; 
  const missingPieces = [15,8,3]; 

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="max-w-6xl gap-x-20 mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 space-y-10 md:space-y-0">

       
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hashim
            </span>{' '}
            — Web Developer
          </h1>
          <p className="text-gray-600 text-lg">
            Crafting modern, creative, and stunning web experiences using the MERN stack and cutting-edge tools.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transform transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white shadow-md transition transform hover:scale-105 duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 grid grid-cols-4 gap-2 w-80 h-80 mx-auto"
        >
          {[...Array(gridSize * gridSize)].map((_, i) => {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;

            if (missingPieces.includes(i)) {
              return (
                <div
                  key={i}
                  className="w-full h-0 pb-[100%] bg-gradient-to-br from-gray-300 to-gray-200 rounded-xl shadow-inner"
                ></div>
              );
            }

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="relative w-full h-0 pb-[100%] overflow-hidden rounded-xl shadow-xl cursor-pointer"
                style={{
                  backgroundImage: `url(${MyPhoto})`,
                  backgroundSize: `${gridSize * 100}%`,
                  backgroundPosition: `${col * blockSize}% ${row * blockSize}%`,
                }}
              ></motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
