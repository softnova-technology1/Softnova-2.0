import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ParticleSystem from "./particalSystem";

export default function ThreeCanvas({ shape }) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <ParticleSystem
        currentShape={shape}
        color="#fe851e"
        speed={1.2}
        size={0.02}
      />
    </Canvas>
  );
}
