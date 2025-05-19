// src/App.jsx

import React from "react";
import LaptopScene from "./components/LaptopScene";
import Dock from "./components/Dock";
import AppWindow from "./components/AppWindow";
import "./styles/main.css";

export default function App() {
  return (
    <div className="app-container">
      {/* 3D Laptop Scene */}
      <LaptopScene />

      {/* MacOS-style App Dock */}
      <Dock />

      {/* Active App Window (Default = Imtinan Services) */}
      <AppWindow />
    </div>
  );
}
