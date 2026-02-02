import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Styles/Particles.module.css';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);
  const { scrollYProgress } = useScroll();

  // Scroll panna panna particles mela move aagum
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -500]);

  useEffect(() => {
    // 50 random particles create panrom
    const tempParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      duration: Math.random() * 3 + 2,
    }));
    setParticles(tempParticles);
  }, []);

  return (
    <div className={styles.container}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            y: yRange, // Intha line thaan scroll animation-ah tharum
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;