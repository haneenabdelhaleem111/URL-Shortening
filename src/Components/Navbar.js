import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-3/4 mx-auto py-8">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo and Links Wrapper */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <img src="./images/logo.svg" alt="logo" />

          {/* Links */}
          <ul className="hidden md:flex items-center gap-6 text-xl ps-5">
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
        <div className="flex items-center gap-6">
          {/* Desktop Auth */}
          <ul className="hidden md:flex items-center gap-6 text-xl">
            <li className="cursor-pointer hover:text-black text-gray-500 font-semibold ">
              Login
            </li>
            <li className="cursor-pointer bg-[#2BCFCF] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#6FE1E1] transition">
              Sign Up
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
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
            className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
