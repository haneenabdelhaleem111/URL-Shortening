import React from "react";

function BoostSection() {
  return (
    <section
      className="mx-auto px-3 sm:px-6 py-8 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center 
 bg-[#3B3054]"
      style={{ backgroundImage: "url('images/bg-boost-desktop.svg')" }}
    >
      <h1 className="font-bold text-3xl sm:text-4xl py-6 text-white text-center">
        Boost your links today
      </h1>
      <button
        type="submit"
        className="bg-[#2BCFCF] text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full hover:bg-[#6FE1E1] transition"
      >
        Get Started!
      </button>
    </section>
  );
}

export default BoostSection;
