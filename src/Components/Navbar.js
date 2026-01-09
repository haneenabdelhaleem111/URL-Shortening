import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-11/12 max-w-6xl mx-auto py-6">
      <div className="flex items-center justify-between">
        {/* Logo and Links Wrapper */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Logo */}
          <img src="./images/logo.svg" alt="logo" className="h-6 sm:h-8" />

          {/* Links */}
          <ul className="hidden md:flex items-center gap-4 text-lg sm:text-xl pl-4">
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

        {/* Auth Links / Hamburger */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Desktop Auth */}
          <ul className="hidden md:flex items-center gap-4 text-lg sm:text-xl">
            <li className="cursor-pointer hover:text-black text-gray-500 font-semibold">
              Login
            </li>
            <li className="cursor-pointer bg-[#2BCFCF] text-white font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-[#6FE1E1] transition">
              Sign Up
            </li>
          </ul>

          {/* Mobile Hamburger */}
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
        <div className="md:hidden mt-3 flex flex-col gap-3 sm:gap-4">
          <a
            href="#features"
            className="cursor-pointer hover:text-gray-600 text-base sm:text-lg"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="cursor-pointer hover:text-gray-600 text-base sm:text-lg"
          >
            Pricing
          </a>
          <a
            href="#resources"
            className="cursor-pointer hover:text-gray-600 text-base sm:text-lg"
          >
            Resources
          </a>
          <a
            href="#login"
            className="cursor-pointer hover:text-gray-600 text-base sm:text-lg"
          >
            Login
          </a>
          <a
            href="#signup"
            className="cursor-pointer bg-blue-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full hover:bg-blue-700 transition text-base sm:text-lg"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
