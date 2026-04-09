import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = ({ brand = "NoorDev" }) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <h2 className="text-xl font-bold text-white">
          {brand}
        </h2>

        {/* Links */}
        <ul className="flex gap-6 text-sm">
          <li><a href="/" className="hover:text-purple-400">Home</a></li>
          <li><a href="/about" className="hover:text-purple-400">About</a></li>
          <li><a href="/projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
        </ul>

        {/* Social */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-purple-400"><FaGithub /></a>
          <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-purple-400"><FaFacebook /></a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm border-t border-gray-700 py-3">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;