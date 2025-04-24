import React from 'react';

function Navbar() {
  return (
    <div className='bg-[#222222] h-20 w-full p-10 flex items-center fixed top-0 left-0 z-50'>
      <span className='text-white text-2xl font-bold flex items-center gap-2'>
        <div className='w-10 h-10 bg-white rounded-full overflow-hidden'>
          {/* <img src="https://avatars.githubusercontent.com/u/103546648?v=4" alt="Profile" className='w-full h-full rounded-full' /> */}
          <div className='h-full w-full bg-purple-900 flex justify-center items-center pt-1'>A</div>
        </div>
        <h1 className='text-white text-xl font-bold '>Aadit</h1>
      </span>
      <div className='ml-auto flex items-center gap-5'>
        <a href="#about" className='text-white text-sm hover:text-cyan-400 transition'>About me</a>
        <a href="#skills" className='text-white text-sm hover:text-cyan-400 transition'>Skills</a>
        <a href="#hobbies" className='text-white text-sm hover:text-cyan-400 transition'>Hobbies</a>
        {/* <a href="#work" className='text-white text-sm hover:text-cyan-400 transition'>Work</a> */}
      </div>
    </div>
  );
}

export default Navbar;