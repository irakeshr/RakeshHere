import React from "react";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Left Side */}
        <div className="mb-4 md:mb-0">
          <p className="text-white font-semibold tracking-wide text-base">RAKESH R</p>
          <p className="mt-1 text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-pink-400 cursor-pointer transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-pink-400 cursor-pointer transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-pink-400 cursor-pointer transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
