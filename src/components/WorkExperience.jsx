import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

function WorkExperience() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto my-12 bg-gradient-to-r from-[#232526] to-[#414345] rounded-2xl shadow-2xl p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 tracking-wide flex items-center gap-3">
        <FaBriefcase className="text-green-400" /> Work Experience
      </h2>
      <div className="space-y-6">
        <div className="bg-[#222] rounded-xl p-6 shadow-lg text-gray-300">
          <div className="font-semibold text-white flex items-center gap-2">
            <FaLaptopCode /> Frontend Developer Intern
          </div>
          <div className="text-sm">ABC Corp (June 2024 – Aug 2024)</div>
          <ul className="list-disc list-inside mt-2">
            <li>Developed modern React interfaces for client projects.</li>
            <li>Collaborated with designers to enhance user experience.</li>
          </ul>
        </div>
        <div className="bg-[#222] rounded-xl p-6 shadow-lg text-gray-300">
          <div className="font-semibold text-white flex items-center gap-2">
            <FaLaptopCode /> Freelance Web Designer
          </div>
          <div className="text-sm">2023–Present</div>
          <ul className="list-disc list-inside mt-2">
            <li>Designed responsive websites for local businesses.</li>
            <li>Provided ongoing support and updates.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default WorkExperience;