import React from "react";

function BoostSection() {
  return (
    <section
      className="mx-auto px-4 sm:px-8 py-12 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center 
 bg-[#3B3054]"
      style={{ backgroundImage: "url('images/bg-boost-desktop.svg')" }}
    >
      <h1 className="font-bold text-4xl sm:text-5xl py-8 text-white text-center">
        Boost your links today
      </h1>
      <button
        type="submit"
        className="bg-[#2BCFCF] text-white text-lg sm:text-xl font-bold px-8 py-4 rounded-full hover:bg-[#6FE1E1] transition"
      >
        Get Started!
      </button>
    </section>
  );
}

export default BoostSection;
