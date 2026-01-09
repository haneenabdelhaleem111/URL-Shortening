import React from "react";

function BoostSection() {
  return (
    <section
      className=" mx-auto px-6 sm:px-10 py-16 bg-cover bg-center bg-no-repeat bg-[#3B3054] items-center justify-center"
      style={{ backgroundImage: "url('images/bg-boost-desktop.svg')" }}
    >
      <h1 className="font-bold text-6xl py-12 text-white">
        Boost your links today
      </h1>
      <button
        type="submit"
        className="bg-[#2BCFCF] text-white text-xl font-bold px-12 py-6 rounded-full hover:bg-[#6FE1E1] transition"
      >
        Get Started!
      </button>
    </section>
  );
}

export default BoostSection;
