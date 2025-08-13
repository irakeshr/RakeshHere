import rakesh from "../assets/title.png";
import ShinyText from "../assets/styles/ShinyText";
import FadeContent from "../assets/styles/FadeContent";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full h-screen px-6 md:px-20 py-20 bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Left: Image with Parallax */}
        <Parallax translateY={[-20, 20]} className="flex justify-center md:justify-start md:w-1/2">
          <img
            src={rakesh}
            alt="Rakesh Avatar"
            className="w-60 h-60 hidden md:block md:w-72 md:h-72 rounded-full object-contain shadow-xl transition-transform hover:scale-105"
          />
        </Parallax>

        {/* Right: About Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            I am a passionate and detail-oriented tech enthusiast with a strong foundation in 
            software development, web technologies, and problem-solving. My journey in technology has been 
            driven by curiosity and a desire to build impactful, user-friendly solutions. I enjoy exploring both 
            frontend and backend development, with hands-on experience in JavaScript, React, and Python, alongside a 
            growing interest in cloud technologies and database management.

Beyond technical skills, I value adaptability, continuous learning, and collaboration.
 I thrive in environments where I can contribute creative ideas, learn from others, and turn challenges into 
 opportunities. My goal is to combine innovation with precision to deliver results that truly make a difference.
            </p>

            {/* Resume Button */}
            <a
              href="/rakesh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300"
            >
              <ShinyText
                text="View Resume"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </a>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
              <a
                href="https://github.com/irakeshr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh-r-854625248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/irakesh.r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
