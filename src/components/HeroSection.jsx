import { useEffect, useRef } from "react";
import { Parallax } from 'react-scroll-parallax';
import rakesh from "../assets/mmm.png";
import SplitText from "../assets/styles/SplitText";
import ShinyText from "../assets/styles/ShinyText";
import { Link } from "react-scroll";

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 80;
      const y = (e.clientY / innerHeight - 0.5) * 80;

      if (imgRef.current) {
        imgRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen px-10 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Mobile Image */}
      <div className="sm:hidden mt-24 md:w-1/2 mt-[200px] md:mt-0 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ perspective: "1000px" }}>
          <img
            ref={imgRef}
            src={rakesh}
            alt="Rakesh Head"
            className="w-full h-full rounded-full object-contain transition-transform duration-300 ease-in-out shadow-2xl"
          />
        </div>
      </div>

      {/* Left: Text Section */}
      <Parallax speed={-10} className="md:w-1/2 text-center md:text-left">
        <h1 className="sm:mt-24 text-6xl md:text-8xl font-extrabold leading-tight">
          <SplitText
            text="HI, I'M"
            className="text-6xl md:text-8xl font-extrabold leading-tight"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <span className="text-white">
            <SplitText
              text="RAKESH R"
              className="text-6xl md:text-8xl font-extrabold leading-tight"
              delay={200}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-md">
          Turning ideas into clean, interactive digital experiences💡💻✨.
        </p>

        <button className="mb-24 mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active-nav"
            className="cursor-pointer px-4 py-1 font-bold rounded-full transition hover:bg-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <ShinyText text="CONTACT ME →" disabled={false} speed={3} className="custom-class" />
          </Link>
        </button>
      </Parallax>

      {/* Right Image */}
      <div className="hidden sm:flex md:w-1/2 mt-[200px] md:mt-0 justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ perspective: "1000px" }}>
          <img
            ref={imgRef}
            src={rakesh}
            alt="Rakesh Head"
            className="w-full h-full rounded-full object-contain transition-transform duration-300 ease-in-out shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
