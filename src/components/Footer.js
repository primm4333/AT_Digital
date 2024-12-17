import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#6B3CC9] text-white py-1/2">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  <div className="mt-6">
    <h1 className="text-2xl font-bold">AT DIGITAL</h1>
    <p className="mt-4 text-sm">
      Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
    </p>
  </div>
  <div className="mt-6 md:ml-auto">
    <h3 className="font-bold text-base mb-4">Our Technologies</h3>
    <ul className="space-y-2 text-sm mb-2">
      <li>React JS</li>
      <li>Gatsby</li>
      <li>Next JS</li>
      <li>Node JS</li>
    </ul>
  </div>
  <div className="mt-6 md:ml-auto">
    <h3 className="font-bold text-base mb-4">Our Services</h3>
    <ul className="space-y-2 text-sm mb-2">
      <li>Social Media Marketing</li>
      <li>Web & Mobile App Development</li>
      <li>Data & Analytics</li>
    </ul>
  </div>
</div>

      <div className="mt-8 border-t border-[#8556D6] pt-4 text-center">
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
        <p className="mt-2 text-sm">© 2024 Primal Fernando.</p>
      </div>
    </footer>
  );
};

export default Footer;