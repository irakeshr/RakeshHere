import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-sm">

        {/* Left: Brand & Contact Info */}
        <div className="text-center md:text-left space-y-2 relative">
          <h1 className="text-white text-xl font-bold tracking-wide">RAKESH R</h1>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>

          {/* Phone */}
          <div
            className={`flex items-center gap-2 transition cursor-pointer group ${copied === "phone" ? "text-pink-400 shadow-md shadow-pink-600/40 rounded-md px-2 py-1" : ""}`}
            onClick={() => handleCopy("+916282972147", "phone")}
          >
            <FaPhone className="text-base" />
            <a href="tel:+916282972147" className="text-xs group-hover:text-pink-400 transition">
              +91 62829 72147
            </a>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] ml-2 text-pink-500 transition duration-300">
              Click to copy
            </span>
          </div>

          {/* Email */}
          <div
            className={`flex items-center gap-2 transition cursor-pointer group ${copied === "email" ? "text-pink-400 shadow-md shadow-pink-600/40 rounded-md px-2 py-1" : ""}`}
            onClick={() => handleCopy("rakurakesh396@gmail.com", "email")}
          >
            <FaEnvelope className="text-base" />
            <a href="mailto:rakurakesh396@gmail.com" className="text-xs group-hover:text-pink-400 transition">
              rakurakesh396@gmail.com
            </a>
            <span className="opacity-0 group-hover:opacity-100 text-[10px] ml-2 text-pink-500 transition duration-300">
              Click to copy
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex justify-center space-x-6 text-sm font-semibold">
          <li>
            <Link to="about" smooth={true} offset={-80} duration={500} className="hover:text-pink-400 cursor-pointer transition">About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={-80} duration={500} className="hover:text-pink-400 cursor-pointer transition">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-80} duration={500} className="hover:text-pink-400 cursor-pointer transition">Contact</Link>
          </li>
        </ul>

        {/* Right: Social Links */}
        <div className="flex justify-center md:justify-end space-x-6 text-xl">
          <a href="https://github.com/irakeshr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rakesh-r-854625248" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/irakesh.r" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
