import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <aside className="flex items-center gap-3">
          <img src={logo} alt="Company Logo" className="w-12 h-12" />
          <h1 className="text-xl font-semibold text-white">HERO.IO</h1>
        </aside>

        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Social Links</h6>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 transition-colors" /> {/* ✅ Facebook icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </nav>
      </div>

      <p className="text-center mt-6 text-sm">
        Copyright © {new Date().getFullYear()} — All rights reserved by HERO Ltd.
      </p>
    </footer>
  );
};

export default Footer;
