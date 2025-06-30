import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../assets/portfolio.jpg'; 
import Blog from  '../assets/blog.jpg'; 
import Ecomrece from  '../assets/ecommerce.jpg'; 
import ChatAppPic from "../assets/chatApp.jpg"
import Saas from "../assets/Saas.jpg"

const projects = [
  {
    id: 1,
    title: "E-Commerce WebApp",
    description: "A full-featured e-commerce platform built with React, Node.js, Express, and MongoDB with payment integration.",
    image: Ecomrece, 
    link: "https://your-ecommerce-app-link.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "I create modern, responsive portfolio websites to showcase your skills, projects, and personal brand using React, Tailwind, and best UX practices.",
    image: Portfolio,
    link: "https://your-portfolio-link.com",
  },
  {
    id: 3,
    title: "Blog CMS Platform",
    description: "A multi-user blog platform with JWT authentication, CRUD features, and rich-text editor using MERN stack.",
    image: Blog,
    link: "https://your-blog-link.com",
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description: "A secure real-time messaging app with user authentication, one-on-one and group chat, typing indicators, and Socket.IO-based instant updates.",
    image: ChatAppPic,
    link: "https://your-blog-link.com",
  },{
    id: 5,
    title: "SaaS Dashboard Platform",
    description: "A multi-tenant SaaS dashboard with user roles, team invites, billing and analytics charts.",
    image: Saas, 
    link: "https://your-ecommerce-app-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-blue-300/40 transition-shadow duration-500 flex flex-col"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
