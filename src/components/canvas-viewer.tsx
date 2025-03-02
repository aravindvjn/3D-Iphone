"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import IphoneModel from "./iphone-model";
import { OrbitControls } from "@react-three/drei";

const CanvasViewer = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }} >
        <ambientLight intensity={1}  />
        <directionalLight intensity={5} position={[2, 2, 2]} color={"white"} />
        <IphoneModel />
      </Canvas>
    </div>
  );
};

export default CanvasViewer;
