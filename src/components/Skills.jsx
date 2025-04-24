import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaPaintBrush, FaCode } from 'react-icons/fa';

const skills = [
  { icon: <FaReact className="text-cyan-400" />, name: 'React.js' },
  { icon: <FaJs className="text-yellow-300" />, name: 'JavaScript' },
  { icon: <FaPaintBrush className="text-pink-400" />, name: 'UI/UX Design' },
  { icon: <FaCode className="text-green-400" />, name: 'Web Development' },
];

function Skills() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto my-12 bg-gradient-to-r from-[#232526] to-[#414345] rounded-2xl shadow-2xl p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center bg-[#222] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-lg text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;