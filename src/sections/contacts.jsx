import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#f0f4f8] via-[#e6ecf0] to-[#f0f4f8] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800">Let's Connect</h2>
          <p className="text-gray-600 text-lg">
            I'm always open to discuss new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FiMail className="text-blue-500 text-2xl" />
              <span className="text-gray-700">hashim@example.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FiPhone className="text-blue-500 text-2xl" />
              <span className="text-gray-700">+92 300 0000000</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FiMapPin className="text-blue-500 text-2xl" />
              <span className="text-gray-700">Lahore, Pakistan</span>
            </div>
          </div>
        </motion.div>

       
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
