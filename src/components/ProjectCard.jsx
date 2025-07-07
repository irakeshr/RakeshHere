// src/components/ProjectCard.jsx
import { useState } from "react";
import ShinyText from "../assets/styles/ShinyText";
import FadeContent from "../assets/styles/FadeContent";

export default function ProjectCard({ title, description, tech, img, video, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <div
      className="bg-[#111] rounded-2xl p-5 shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="rounded-xl overflow-hidden border border-gray-700 mb-4">
        {hovered && video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            className="w-full h-40 object-cover"
          />
        ) : (
          <img
            src={img}
            alt={title}
            className="w-full h-40 object-cover"
          />
        )}
      </div>

      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <p className="text-gray-500 text-xs mt-2 italic">Tech: {tech}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium hover:scale-105 transition-transform"
        >
               <ShinyText text="View Project" disabled={false} speed={3} className='custom-class' />

        </a>
      )}
    </div>
    </FadeContent>
  );
}
