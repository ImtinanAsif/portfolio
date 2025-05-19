// src/components/LaptopScene.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import Spline from "@splinetool/react-spline";

export default function LaptopScene() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <ambientLight intensity={1.5} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        
        {/* Replace this link with your custom Spline 3D laptop animation */}
        <Spline scene="https://prod.spline.design/6qP5pN4G2zjhRx2I/scene.splinecode" />
      </Canvas>
    </div>
  );
}
