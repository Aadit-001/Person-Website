import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPlane, FaBookOpen, FaMusic } from 'react-icons/fa';

const hobbies = [
  { icon: <FaCamera className="text-pink-300" />, name: 'Photography' },
  { icon: <FaPlane className="text-blue-400" />, name: 'Traveling' },
  { icon: <FaBookOpen className="text-yellow-400" />, name: 'Reading Tech Blogs' },
  { icon: <FaMusic className="text-purple-400" />, name: 'Music Production' },
];

function Hobbies() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto my-12 bg-gradient-to-r from-[#232526] to-[#414345] rounded-2xl shadow-2xl p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">Hobbies & Interests</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {hobbies.map((hobby, idx) => (
          <div key={idx} className="flex flex-col items-center bg-[#222] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-4xl mb-2">{hobby.icon}</div>
            <span className="text-lg text-gray-200">{hobby.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Hobbies;