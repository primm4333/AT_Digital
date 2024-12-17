import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-white">
      <img src="/banner.jpg" alt="Banner" className="w-full h-auto" />
    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-start p-10">
    <div className="bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] p-6 md:p-12 rounded-md text-white w-3/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
      We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </h2>
      <button className="bg-[#F28D35] hover:bg-[#1CBDDD] px-6 py-3 rounded-md text-white font-bold">
      GET IN TOUCH
      </button>
     </div>
    </div>

    </section>
  );
};

export default Banner;