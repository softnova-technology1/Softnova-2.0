import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ===============================
   SHAPE GENERATOR
================================ */
const generatePoints = (shape, count) => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    let x = 0,
      y = 0,
      z = 0;

    switch (shape) {
      default: // wave
        x = (Math.random() - 0.5) * 20;
        z = (Math.random() - 0.5) * 20;
        y = Math.sin(x * 0.4) * Math.cos(z * 0.4) * 2.5;
    }

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;
  }

  return positions;
};

/* ===============================
   PARTICLE SYSTEM
================================ */
const ParticleSystem = ({
  currentShape,
  color = "#ff6600",
  speed = 1,
  size = 0.05,
}) => {
  const count = 18000;
  const meshRef = useRef();
  const mouseRef = useRef(new THREE.Vector3());

  const currentPositions = useMemo(() => new Float32Array(count * 3), [count]);

  const shapesRef = useRef({});

  const getShapePositions = (name) => {
    if (!shapesRef.current[name]) {
      shapesRef.current[name] = generatePoints(name, count);
    }
    return shapesRef.current[name];
  };

  useEffect(() => {
    currentPositions.set(getShapePositions(currentShape));
  }, [currentShape, currentPositions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const target = getShapePositions(currentShape);
    const posAttr = meshRef.current.geometry.attributes.position;

    mouseRef.current.set(state.pointer.x * 10, state.pointer.y * 10, 0);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      currentPositions[i3] += (target[i3] - currentPositions[i3]) * 0.04;
      currentPositions[i3 + 1] +=
        (target[i3 + 1] - currentPositions[i3 + 1]) * 0.04;
      currentPositions[i3 + 2] +=
        (target[i3 + 2] - currentPositions[i3 + 2]) * 0.04;

      const dx = currentPositions[i3] - mouseRef.current.x;
      const dy = currentPositions[i3 + 1] - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let repulsionX = 0;
      let repulsionY = 0;

      if (dist < 3 && dist > 0.0001) {
        const force = (3 - dist) / 3;
        repulsionX = (dx / dist) * force * 1.5;
        repulsionY = (dy / dist) * force * 1.5;
      }

      const noise = Math.sin(time * speed + i) * 0.015;

      posAttr.array[i3] = currentPositions[i3] + repulsionX + noise;
      posAttr.array[i3 + 1] = currentPositions[i3 + 1] + repulsionY + noise;
      posAttr.array[i3 + 2] = currentPositions[i3 + 2];
    }

    posAttr.needsUpdate = true;
    meshRef.current.rotation.y += 0.0008 * speed;
  });

  return (
    <points ref={meshRef} position={[0, -3.5, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>

      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.5}
      />
    </points>
  );
};

export default ParticleSystem;
