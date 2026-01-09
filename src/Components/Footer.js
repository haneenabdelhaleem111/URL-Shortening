import React from "react";
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div
        className="
      max-w-7xl mx-auto
      px-6 sm:px-10 lg:px-0
      py-14
      grid gap-16
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-5
      text-left
    "
      >
        {/* Logo */}
        <div>
          <img src="/images/logo.svg" alt="Logo" className="h-8 mb-4" />
        </div>

        {/* List 1 */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Features</h4>
          <ul className="space-y-2 text-xl ">
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
          <h4 className="text-white text-xl font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-xl ">
            <li>
              <a href="#" className="hover:text-cyan-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">
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
          <h4 className="text-white text-xl  font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-xl ">
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
        <div className="flex gap-5 lg:justify-end">
          <a href="#facebook" className="hover:text-cyan-400">
            <img src="/images/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="#twitter" className="hover:text-cyan-400">
            <img src="/images/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="#pinterest" className="hover:text-cyan-400">
            <img src="/images/icon-pinterest.svg" alt="Pinterest" />
          </a>
          <a href="#instagram" className="hover:text-cyan-400">
            <img src="/images/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
      <div class="attribution" className="text-xl ">
        Challenge by {""}
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
