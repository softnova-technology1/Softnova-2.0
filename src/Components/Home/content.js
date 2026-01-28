import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Dots() {
  const ref = useRef();
  const count = 3500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * 3 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.0015;
    ref.current.rotation.x += 0.0008;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#ffa200"
        size={0.04}
        transparent
        opacity={0.95}
        depthWrite={false}
        sizeAttenuation
      />
    </Points>
  );
}

export default function ContentDots() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Dots />
    </Canvas>
  );
}
