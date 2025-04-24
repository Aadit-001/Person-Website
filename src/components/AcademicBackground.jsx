import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

function AcademicBackground() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto my-12 bg-gradient-to-r from-[#232526] to-[#414345] rounded-2xl shadow-2xl p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 tracking-wide flex items-center gap-3">
        <FaGraduationCap className="text-yellow-400" /> Academic Background
      </h2>
      <div className="bg-[#222] rounded-xl p-6 shadow-lg text-gray-300">
        <div className="mb-2">
          <span className="font-semibold text-white">B.Tech in Computer Science</span> <br />
          XYZ University, 2021–2025
        </div>
        <div>
          <span className="font-semibold text-white">Relevant Coursework:</span> Data Structures, Algorithms, Web Development
        </div>
      </div>
    </motion.section>
  );
}

export default AcademicBackground;