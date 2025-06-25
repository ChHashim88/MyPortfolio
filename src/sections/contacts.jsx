import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { insertContactApi } from '../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { success, error } = await insertContactApi(formData);

    if (success) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 1000);
    } else {
      console.error("Error saving contact:", error?.message);
    }

    setLoading(false);
  };

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
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-600 text-center font-semibold"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
