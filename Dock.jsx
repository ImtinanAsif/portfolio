// src/components/Dock.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { apps } from "../data/apps";
import useAppStore from "../store/appStore";

export default function Dock() {
  const { setActiveApp } = useAppStore();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4 p-4 bg-black/30 backdrop-blur-md rounded-xl shadow-[0_0_30px_red]">
      {apps.map((app, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.3 }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setActiveApp(app.id)}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-black border border-red-500 cursor-pointer transition-all duration-300 ${
            hovered === index ? "shadow-[0_0_20px_red]" : ""
          }`}
        >
          <img src={app.icon} alt={app.name} className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
}
