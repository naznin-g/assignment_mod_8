import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/all-apps" },
    { name: "Installation", path: "/installation" },
  ];

  const activeClass = ({ isActive }) =>
    isActive ? "text-[#9063EC] underline font-semibold" : "text-black";

  return (
    <nav className="bg-base-100 px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-xl font-semibold text-[#9063EC]">HERO.IO</h1>
        </NavLink>

        
        <ul className="hidden lg:flex gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={activeClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <a
          href="https://github.com/naznin-g"  
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-[#844BEC] text-white flex items-center gap-2"
        >
          <FaGithub className="text-xl" />
          <span>Contribute</span>
        </a>

        {/* Mobile menu button */}
        <div className="lg:hidden ml-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isDropdownOpen && (
        <ul className="flex flex-col gap-3 mt-2 bg-base-100 p-4 rounded shadow-lg lg:hidden">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={activeClass}
                onClick={() => setIsDropdownOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
