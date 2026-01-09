import React from "react";

function HeroSection() {
  return (
    <section className="w-full py-28 lg:ps-44 pb-36">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-x-36 px-4 lg:px-12">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-left">
            More than just shorter links
          </h1>
          <p className="mt-5 text-base sm:text-xl lg:text-2xl text-gray-500 leading-relaxed text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="mt-10 text-xl bg-[#2BCFCF] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#6FE1E1]">
            Get Started
          </button>
        </div>

        {/* Illustration */}
        <div className="lg:w-4/6">
          <img
            src="./images/illustration-working.svg"
            alt="working illustration"
            className="w-full lg:max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
