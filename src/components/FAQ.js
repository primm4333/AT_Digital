import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#6B3CC9]">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          <div
            className={`border p-6 rounded-md shadow-md hover:shadow-lg transition-all ${
              activeIndex === 0 ? 'bg-[#6B3CC9] bg-opacity-5' : 'bg-[#6B3CC9] bg-opacity-5'
            } max-w-3xl mx-auto`} // Corrected syntax here
            onClick={() => toggleAccordion(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#333333] text-xl">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              </h3>
              <span className="text-[#6B3CC9] text-2xl font-bold">
                {activeIndex === 0 ? '-' : '+'}
              </span>
            </div>
            {activeIndex === 0 && (
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            )}
          </div>

          <div
            className={`border p-6 rounded-md shadow-md hover:shadow-lg transition-all ${
              activeIndex === 1 ? 'bg-[#6B3CC9] bg-opacity-5' : 'bg-[#6B3CC9] bg-opacity-5'
            } max-w-3xl mx-auto`} // Corrected syntax here
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#333333] text-xl">
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
              </h3>
              <span className="text-[#6B3CC9] text-2xl font-bold">
                {activeIndex === 1 ? '-' : '+'}
              </span>
            </div>
            {activeIndex === 1 && (
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            )}
          </div>

          <div
            className={`border p-6 rounded-md shadow-md hover:shadow-lg transition-all ${
              activeIndex === 2 ? 'bg-[#6B3CC9] bg-opacity-5' : 'bg-[#6B3CC9] bg-opacity-5'
            } max-w-3xl mx-auto`} // Corrected syntax here
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#333333] text-xl">
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
              </h3>
              <span className="text-[#6B3CC9] text-2xl font-bold">
                {activeIndex === 2 ? '-' : '+'}
              </span>
            </div>
            {activeIndex === 2 && (
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
