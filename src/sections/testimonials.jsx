import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Hashim did a fantastic job developing our website. Very professional, timely, and the quality was top-notch.",
    company: "Tech Solutions",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Great communication and attention to detail. Highly recommended for any web development projects!",
    company: "Creative Studio",
  },
  {
    id: 3,
    name: "Mike Johnson",
    feedback: "Delivered exactly what we needed. The project was smooth and exceeded our expectations.",
    company: "Startup Inc.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">What Clients Say</h2>
        
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center space-y-4 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm italic">{testimonial.company}</p>
              <p className="text-gray-700 text-center text-sm mt-4">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
