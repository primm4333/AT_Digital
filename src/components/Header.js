import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#6B3CC9] text-white py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">AT DIGITAL</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-[#EF7C00]">SERVICES</a>
          <a href="#about" className="hover:text-[#EF7C00]">ABOUT US</a>
          <a href="#contact" className="hover:text-[#EF7C00]">CONTACT US</a>
          <a href="#careers" className="hover:text-[#EF7C00]">CAREERS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
