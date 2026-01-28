import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

/* Generate SPHERE particles */
const generateSpherePoints = (count) => {
  const positions = new Float32Array(count * 3);
  const flicker = new Float32Array(count);
  const brightness = new Float32Array(count); // ⭐ thickness variation

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = 5;

    positions[i3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);

    flicker[i] = Math.random() * Math.PI * 2;
    brightness[i] = 0.6 + Math.random() * 0.8; // ⭐ some stars thick
  }

  return { positions, flicker, brightness };
};

const SphereParticles = () => {
  const count = 16000; // ⭐ little less = more visible
  const meshRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const active = useRef(true);

  const { positions: originalPositions, flicker, brightness } = useMemo(
    () => generateSpherePoints(count),
    []
  );

  const positions = useMemo(
    () => new Float32Array(originalPositions),
    []
  );

  /* Mouse tracking */
  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  /* Scroll reset */
  useEffect(() => {
    const onScroll = () => {
      active.current = window.scrollY < window.innerHeight;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(({ clock }) => {
    const attr = meshRef.current.geometry.attributes.position;
    const time = clock.getElapsedTime();

    const dist = Math.sqrt(
      mouse.current.x ** 2 + mouse.current.y ** 2
    );

    const strength = active.current
      ? THREE.MathUtils.clamp(dist, 0, 1)
      : 0;

    const spread = 1 + strength * 1.5;
    const lerpSpeed = 0.015;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      const tx = ox * spread;
      const ty = oy * spread;
      const tz = oz * spread;

      attr.array[i3]     += (tx - attr.array[i3]) * lerpSpeed;
      attr.array[i3 + 1] += (ty - attr.array[i3 + 1]) * lerpSpeed;
      attr.array[i3 + 2] += (tz - attr.array[i3 + 2]) * lerpSpeed;

      flicker[i] += 0.01;
    }

    attr.needsUpdate = true;

    /* rotation */
    meshRef.current.rotation.y += 0.0006;
    meshRef.current.rotation.x += 0.0003;

    /* ⭐⭐ THICK KUTTU-KUTTU FLICKER ⭐⭐ */
    const pulse =
      0.055 + Math.sin(time * 2 + flicker[0]) * 0.015;

    meshRef.current.material.size = pulse;
    meshRef.current.material.opacity =
      0.75 + Math.sin(time * 3 + flicker[1]) * 0.25;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <PointMaterial
        color="#ff7301"     // ⭐ warm bright star
        size={0.055}        // ⭐ THICK
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function SphereBackground() {
  return (
    <Canvas dpr={[1, 2]}>
      <color attach="background" args={["#020205"]} />
      <ambientLight intensity={0.35} />
      <SphereParticles />
      <OrbitControls enableZoom={false} enablePan={false} />
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
    </Canvas>
  );
}
