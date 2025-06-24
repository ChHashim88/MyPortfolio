import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaCloud } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Crafting responsive, fast, and interactive user interfaces using React.js, Vite, Tailwind CSS, and modern UI libraries.",
    icon: <FaReact className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Backend API Development",
    description: "Building scalable RESTful APIs using Node.js, Express.js, and handling complex server-side logic for web applications.",
    icon: <FaNodeJs className="text-4xl text-green-600" />,
  },
  {
    id: 3,
    title: "MongoDB Database Design",
    description: "Designing and managing robust MongoDB databases, including schema design, aggregation pipelines, and performance optimization.",
    icon: <FaDatabase className="text-4xl text-purple-600" />,
  },
  {
    id: 4,
    title: "Full Stack Web Applications",
    description: "Developing end-to-end MERN stack applications — from frontend to backend — ensuring seamless integration and performance.",
    icon: <FaCloud className="text-4xl text-indigo-500" />,
  },
  {
    id: 5,
    title: "Mobile Responsive Design",
    description: "Creating fully responsive web applications that work flawlessly across all devices — desktops, tablets, and mobiles.",
    icon: <FaMobileAlt className="text-4xl text-pink-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-4 flex flex-col items-center text-center hover:shadow-blue-300/40 transition-shadow duration-500"
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
