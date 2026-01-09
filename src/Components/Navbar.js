import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-4 sm:py-8">
      <div className="flex items-center justify-between">
        {/* Logo + Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <img src="/images/logo.svg" alt="logo" className="h-8 sm:h-10" />

          <ul className="hidden md:flex items-center gap-4 sm:gap-6 text-base md:text-lg pl-4">
            <li className="cursor-pointer font-semibold hover:text-black text-gray-500">
              Features
            </li>
            <li className="cursor-pointer font-semibold hover:text-black text-gray-500">
              Pricing
            </li>
            <li className="cursor-pointer font-semibold hover:text-black text-gray-500">
              Resources
            </li>
          </ul>
        </div>

        {/* Auth + Hamburger */}
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden md:flex items-center gap-4 sm:gap-6 text-base md:text-lg">
            <li className="cursor-pointer hover:text-black text-gray-500 font-semibold">
              Login
            </li>
            <li className="cursor-pointer bg-[#2BCFCF] text-white font-semibold px-5 py-2 sm:px-7 sm:py-3 rounded-full hover:bg-[#6FE1E1] transition">
              Sign Up
            </li>
          </ul>

          <button
            className="md:hidden text-xl sm:text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 sm:gap-4">
          <a href="#features" className="cursor-pointer hover:text-gray-600">
            Features
          </a>
          <a href="#pricing" className="cursor-pointer hover:text-gray-600">
            Pricing
          </a>
          <a href="#resources" className="cursor-pointer hover:text-gray-600">
            Resources
          </a>
          <a href="#login" className="cursor-pointer hover:text-gray-600">
            Login
          </a>
          <a
            href="#signup"
            className="cursor-pointer bg-[#2BCFCF] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full hover:bg-[#6FE1E1] transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
