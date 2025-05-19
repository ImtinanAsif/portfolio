// src/components/apps/Services.jsx

import React from "react";
import { motion } from "framer-motion";

const gigs = [
  {
    title: "YouTube Thumbnail Design",
    desc: "Eye-catching thumbnails with bold typography and CTR-maximized layout.",
    price: "$25 / thumbnail",
  },
  {
    title: "Video Editing (Shorts & Reels)",
    desc: "Cinematic cuts, sound effects, zooms, captions — TikTok/IG/YouTube ready.",
    price: "$50 / minute",
  },
  {
    title: "Full Video Production",
    desc: "From script to cut — storytelling, B-roll, music, editing included.",
    price: "$299 / video",
  },
];

export default function Services() {
  return (
    <div className="w-full h-full flex flex-col gap-6 overflow-y-auto p-4 text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold glitch-text mb-4 text-red-500">
        Imtinan Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black/80 border border-red-500 rounded-xl p-4 shadow-[0_0_40px_red] backdrop-blur-md transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-red-400 mb-2">{gig.title}</h2>
            <p className="text-sm mb-3 text-gray-300">{gig.desc}</p>
            <span className="text-red-300 font-semibold">{gig.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
