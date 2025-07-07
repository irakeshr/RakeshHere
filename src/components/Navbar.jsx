import React from "react";
import { Link } from "react-scroll";
import ShinyText from "../assets/styles/ShinyText";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-2xl font-bold tracking-wide">
          <ShinyText text="RAKESH R" disabled={false} speed={3} className="custom-class" />
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-nav"
              className="cursor-pointer px-4 py-1 font-semibold red rounded-full transition hover:bg-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
          <ShinyText
            text="About"
            disabled={false}
            speed={3}
            className="custom-class"
          />
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-nav"
              className="cursor-pointer px-4 font-semibold py-1 rounded-full transition hover:bg-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
             <ShinyText
            text="Project"
            disabled={false}
            speed={3}
            className="custom-class"
          />
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-nav"
              className="cursor-pointer px-4 py-1 font-semibold rounded-full transition hover:bg-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <ShinyText
            text="Contact"
            disabled={false}
            speed={3}
            className="custom-class"
          />
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <button className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <ShinyText text="Let's Talk" disabled={false} speed={3} className="custom-class" />
          </button>
        </Link>
      </div>
    </nav>
  );
}
