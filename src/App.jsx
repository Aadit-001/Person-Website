import React from 'react';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Passions from './components/Passions';
import AcademicBackground from './components/AcademicBackground';
import WorkExperience from './components/WorkExperience';
import Navbar from './components/Navbar';
import AboutME from './components/AboutME';
import Footer from './components/Footer';
// import Certifications from './components/Certifications';

function App() {
  return (
    <div className="bg-[#222222] h-full w-full">
      <Navbar />
      <div id="about"><AboutME /></div>
      <div id="skills"><Skills /></div>
      <div id="hobbies"><Hobbies /></div>
      <AcademicBackground />
      <WorkExperience />
      {/* <Certifications /> */}
      <Footer />
    </div>
  );
}

export default App;