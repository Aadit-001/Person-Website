import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#222222] text-gray-400 text-center py-4">
      &copy; {new Date().getFullYear()} Aadit Jha. All rights reserved.
    </footer>
  );
}

export default Footer;