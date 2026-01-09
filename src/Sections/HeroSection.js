import React from "react";

function HeroSection() {
  return (
    <section className="w-full py-36 lg:ps-56 pb-44">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-x-48 px-6 lg:px-16">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start py-32">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight text-left">
            More than just shorter links
          </h1>
          <p className="mt-7 text-lg sm:text-2xl lg:text-3xl text-gray-500 leading-relaxed text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="mt-12 text-2xl bg-[#2BCFCF] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#6FE1E1]">
            Get Started
          </button>
        </div>

        {/* Illustration */}
        <div className="lg:w-4/6">
          <img
            src="./images/illustration-working.svg"
            alt="working illustration"
            className="w-full lg:max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
