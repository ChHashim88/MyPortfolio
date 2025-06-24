import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 relative inline-block"
        >
          About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></span>
        </motion.h2>

       
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl p-8 mx-4 md:mx-0 space-y-6 hover:shadow-blue-300/40 transition-shadow duration-500"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm <span className="text-blue-600 font-semibold">Hashim</span>, a passionate web developer specializing in building
            responsive, user-friendly web applications using the <span className="font-semibold text-purple-600">MERN stack</span> (MongoDB, Express, React, Node.js).
            I enjoy crafting clean code and designing seamless user experiences.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With a strong foundation in <span className="font-semibold text-blue-600">JavaScript, React, and Tailwind CSS</span>,
            I aim to deliver high-quality and performant web solutions that solve real-world problems with creativity and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
