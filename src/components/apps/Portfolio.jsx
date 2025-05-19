// src/components/apps/Portfolio.jsx

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MrBeast-style Short",
    thumb: "/portfolio/mrbeast-thumb.jpg",
    link: "https://youtu.be/yourlink1",
  },
  {
    title: "Animated Reels Pack",
    thumb: "/portfolio/reels-pack.jpg",
    link: "https://youtu.be/yourlink2",
  },
  {
    title: "High CTR Thumbnail",
    thumb: "/portfolio/ctr-thumbnail.jpg",
    link: "https://yourdesignportfolio.com/thumb",
  },
];

export default function Portfolio() {
  return (
    <div className="w-full h-full overflow-y-auto p-6 text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold glitch-text mb-6 text-red-500">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="block bg-black/80 border border-red-500 rounded-xl overflow-hidden shadow-[0_0_40px_red] backdrop-blur-md transition-all duration-300"
          >
            <img
              src={project.thumb}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-red-400">{project.title}</h2>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
