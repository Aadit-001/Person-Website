import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaGithub, FaChalkboardTeacher } from 'react-icons/fa';

const passions = [
  { icon: <FaUsers className="text-blue-300" />, name: 'Building user-friendly apps' },
  { icon: <FaLightbulb className="text-yellow-300" />, name: 'Learning new technologies' },
  { icon: <FaGithub className="text-gray-300" />, name: 'Open-source contribution' },
  { icon: <FaChalkboardTeacher className="text-green-400" />, name: 'Mentoring & teaching' },
];

function Passions() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto my-12 bg-gradient-to-r from-[#232526] to-[#414345] rounded-2xl shadow-2xl p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">Passions</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {passions.map((passion, idx) => (
          <div key={idx} className="flex flex-col items-center bg-[#222] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-4xl mb-2">{passion.icon}</div>
            <span className="text-lg text-gray-200">{passion.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Passions;