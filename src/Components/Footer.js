import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-8 lg:px-0
          py-10
          grid gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          text-left
        "
      >
        {/* Logo */}
        <div>
          <img src="/images/logo.svg" alt="Logo" className="h-6 mb-3" />
        </div>

        {/* List 1 */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Features</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#home" className="hover:text-cyan-400">
                Link Shortening
              </a>
            </li>
            <li>
              <a href="#links" className="hover:text-cyan-400">
                Branded Links
              </a>
            </li>
            <li>
              <a href="#analytics" className="hover:text-cyan-400">
                Analytics
              </a>
            </li>
          </ul>
        </div>

        {/* List 2 */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#blog" className="hover:text-cyan-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#devs" className="hover:text-cyan-400">
                Developers
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-cyan-400">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* List 3 */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#about" className="hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-cyan-400">
                Our Team
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-cyan-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 lg:justify-end">
          <a href="#facebook" className="hover:text-cyan-400">
            <img
              src="/images/icon-facebook.svg"
              alt="Facebook"
              className="h-5 w-5"
            />
          </a>
          <a href="#twitter" className="hover:text-cyan-400">
            <img
              src="/images/icon-twitter.svg"
              alt="Twitter"
              className="h-5 w-5"
            />
          </a>
          <a href="#pinterest" className="hover:text-cyan-400">
            <img
              src="/images/icon-pinterest.svg"
              alt="Pinterest"
              className="h-5 w-5"
            />
          </a>
          <a href="#instagram" className="hover:text-cyan-400">
            <img
              src="/images/icon-instagram.svg"
              alt="Instagram"
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>

      {/* Attribution */}
      <div className="text-sm text-center mt-6 px-4">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-[#2BCFCF]"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/haneen-abdulhaleem20306/"
          className="text-[#2BCFCF]"
        >
          Haneen Abdelhaleem
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
