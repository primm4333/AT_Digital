import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 px-4">

      <div className="text-center flex flex-col md:flex-row items-center px-8 md:px-16 py-5 justify-end">
  <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-6">
  <img src="/ux.png" alt="Web App" className="w-40 h-40 md:w-32 md:h-32" />
  </div>
  <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
    <h3 className="text-xl md:text-2xl font-bold text-[#6B3CC9]">Web & Mobile App Development</h3>
    <p className="text-gray-600 mt-2">
      Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
    </p>
    <div className="flex items-center justify-center md:justify-start mt-4">
      <button className="text-white bg-[#F28D35] hover:bg-[#1CBDDD] px-6 py-3 rounded-md font-semibold">LEARN MORE</button>
    </div>
  </div>
</div>




      <div className="text-center flex flex-col md:flex-row items-center px-6 md:px-12 py-5">
  <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg mb-4 md:mb-0 md:mr-6">
    <h3 className="text-xl md:text-2xl font-bold text-[#6B3CC9]">Digital Strategy Consulting</h3>
    <p className="text-gray-600 mt-2">
      Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
    </p>
    <div className="flex items-center justify-center md:justify-start mt-4">
      <button className="text-white bg-[#F28D35] hover:bg-[#1CBDDD] px-6 py-3 rounded-md font-semibold">LEARN MORE</button>
    </div>
  </div>
  
  <div className="flex items-center justify-center mb-4 md:mb-0 md:ml-6">
    <img src="/seo.png" alt="Strategy" className="w-40 h-40 md:w-32 md:h-32" />
  </div>
</div>

</div>

    </section>
  );
};

export default Features;