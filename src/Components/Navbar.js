import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-11/12 max-w-6xl mx-auto py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Links Wrapper */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Logo */}
          <img src="./images/logo.svg" alt="logo" className="h-5 sm:h-6" />

          {/* Links */}
          <ul className="hidden md:flex items-center gap-3 text-base sm:text-lg pl-3">
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
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop Auth */}
          <ul className="hidden md:flex items-center gap-3 text-base sm:text-lg">
            <li className="cursor-pointer hover:text-black text-gray-500 font-semibold">
              Login
            </li>
            <li className="cursor-pointer bg-[#2BCFCF] text-white font-semibold px-4 py-1.5 sm:px-5 sm:py-2 rounded-full hover:bg-[#6FE1E1] transition">
              Sign Up
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-lg sm:text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2.5 sm:gap-3">
          <a
            href="#features"
            className="cursor-pointer hover:text-gray-600 text-sm sm:text-base"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="cursor-pointer hover:text-gray-600 text-sm sm:text-base"
          >
            Pricing
          </a>
          <a
            href="#resources"
            className="cursor-pointer hover:text-gray-600 text-sm sm:text-base"
          >
            Resources
          </a>
          <a
            href="#login"
            className="cursor-pointer hover:text-gray-600 text-sm sm:text-base"
          >
            Login
          </a>
          <a
            href="#signup"
            className="cursor-pointer bg-[#2BCFCF] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full hover:bg-[#6FE1E1] transition text-sm sm:text-base"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
