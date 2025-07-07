// src/components/ProjectsSection.jsx
import ProjectCard from "./ProjectCard";
import proj1 from "../assets/proj1.png"; // Replace all with actual images
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";
import video1 from "../assets/videos/ProVideo1.mp4";
import video2 from "../assets/videos/ProVideo2.mp4";
import video3 from "../assets/videos/ProVideo3.mp4";
import video6 from "../assets/videos/ProVideo6.mp4";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen px-6 md:px-20 py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center md:text-left">
          Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Pottery eCommerce"
            description="A beautiful eCommerce site to sell handcrafted pots."
            tech="React, Tailwind CSS"
            img={proj1}
            video={video1}
            link="https://pot-here.vercel.app/"
          />
          <ProjectCard
            title="College Website"
            description="A modern responsive site to showcase your college."
            tech="HTML, CSS, JavaScript"
            video={video2}
            img={proj2}
            link="https://irakeshr.github.io/collegeweb/index.html"
          />
          <ProjectCard
            title="Todo App"
            description="Minimal todo list with add/delete/complete features."
            tech="React"
            video={video3}
            img={proj3}
            link="https://irakeshr.github.io/TodoApp/"
          />
          <ProjectCard
            title="My Portfolio"
            description="Interactive personal portfolio showcasing my works."
            tech="React, Tailwind"
            img={proj4}
            link="#"
          />
          <ProjectCard
            title="Playable Piano"
            description="Digital piano you can play with mouse or keys."
            tech="HTML, CSS, JavaScript"
            img={proj5}
            link="https://irakeshr.github.io/piano/"
          />
          <ProjectCard
            title="Random Color Picker"
            description="Generates random hex and RGB colors on button click."
            tech="JavaScript"
            video={video6}
            img={proj6}
            link="https://irakeshr.github.io/randomcolor/"
          />
        </div>
      </div>
    </section>
  );
}
