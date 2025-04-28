import React from 'react';
import AditTestimonial from '../assets/AditTestimonial.jpeg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function AboutME() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#232526] to-[#414345] py-16 px-4"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="flex items-center justify-center w-full md:w-1/2 p-10"
        >
          <img
            src={AditTestimonial}
            alt="Adit Testimonial"
            onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/256?text=No+Image"; }}
            className="h-56 w-56 md:h-72 md:w-72 object-cover rounded-full shadow-2xl border-4 border-[#444] transition-all duration-300"
          />
        </motion.div>
        {/* About Me Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow">
            Aadit Jhajnn
          </h2>
          <div className="h-1 w-16 bg-cyan-400 rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 mb-7 font-medium">
            Hi! I’m Aadit, a passionate developer with a love for building modern web experiences.<br />
            I enjoy working with <span className="text-cyan-300 font-semibold">React</span>, exploring new technologies, and creating projects that make a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-7">
            <span className="bg-cyan-700/70 text-white px-5 py-2 rounded-full text-base font-semibold shadow">React</span>
            <span className="bg-yellow-600/70 text-white px-5 py-2 rounded-full text-base font-semibold shadow">JavaScript</span>
            <span className="bg-pink-600/70 text-white px-5 py-2 rounded-full text-base font-semibold shadow">UI/UX</span>
            <span className="bg-green-700/70 text-white px-5 py-2 rounded-full text-base font-semibold shadow">Web Design</span>
          </div>
          <div className="flex gap-6 justify-center mt-2">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-2xl transition">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com" className="text-red-400 hover:text-white text-2xl transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutME;