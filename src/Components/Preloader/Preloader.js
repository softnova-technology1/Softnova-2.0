import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Cloud, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import './Preloader.css';
import softnovaLogo from '../../images/softnovaLogo.png';


const GalaxyScene = () => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <>
            <group ref={groupRef}>
                {/* Deep field stars - Optimized count */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                {/* Nebula Clouds (Using transparent Clouds for fog effect) */}
                <Cloud opacity={0.3} speed={0.4} width={10} depth={1.5} segments={20} color="#1a0f2e" position={[0, -5, -10]} />
                <Cloud opacity={0.3} speed={0.4} width={10} depth={1.5} segments={20} color="#2e1a0f" position={[0, 5, -10]} />

                {/* Floating Space Dust */}
                <Sparkles count={500} scale={12} size={3} speed={0.4} opacity={0.6} color="#fe851e" />
            </group>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#fe851e" />
        </>
    );
};


// --- HELPERS FOR TEXT EXPLOSION ---
const generateRandomState = () => ({
    x: (Math.random() - 0.5) * 800, // Explodes horizontally
    y: (Math.random() - 0.5) * 800, // Explodes vertically
    z: (Math.random() - 0.5) * 500, // Explodes in depth
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
    rotateZ: Math.random() * 360,
    opacity: 0,
    scale: 0.5
});

const Preloader = ({ finishLoading }) => {
    const [percent, setPercent] = useState(0);
    const titleText = "SOFTNOVA";
    const subtitleText = "STERLING IT SERVICE";

    // Memoize the random starting positions so they don't change on re-renders
    const randomPositions = useMemo(() => {
        return titleText.split("").map(() => generateRandomState());
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 3) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (percent === 100) {
            setTimeout(finishLoading, 1500); // Wait a bit after 100%
        }
    }, [percent, finishLoading]);


    // ANIMATION VARIANTS
    const charVariants = {
        hidden: (i) => randomPositions[i], // Start from chaos
        visible: {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 2, // Slow assembly
                delay: 0.5 // Delay before assembling
            }
        },
        exit: {
            scale: 20, // Fly into camera
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 0.8 }
        }
    };

    const logoVariants = {
        hidden: { scale: 0, rotate: -180, opacity: 0 },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: { duration: 1.5, type: "spring" }
        },
        exit: { scale: 0, opacity: 0 }
    };

    return (
        <motion.div
            className="preloader-container"
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <div className="canvas-wrapper">
                <Canvas
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0, 5], fov: 60 }}
                    gl={{ antialias: false, powerPreference: "high-performance" }}
                >
                    <color attach="background" args={['#000000']} />
                    <GalaxyScene />
                </Canvas>
            </div>

            <div className="content-wrapper">
                {/* --- LOGO --- */}
                <motion.img
                    src={softnovaLogo}
                    className="logo-img"
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />

                {/* --- EXPLODING TEXT ASSEMBLY --- */}
                <div className="title-container">
                    {titleText.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={charVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="galaxy-char"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* --- SUBTITLE --- */}
                <div className="subtitle-container">
                    {subtitleText.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2 + (i * 0.05) }} // Start after main text
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* --- LOADER --- */}
                <div className="loader-track">
                    <motion.div
                        className="loader-bar"
                        animate={{ width: `${percent}%` }}
                    />
                </div>
                <div className="percent-display">{percent}%</div>
            </div>
        </motion.div>
    );
};

export default Preloader;
