import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ finishLoading }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("System Startup");
    const frameRef = useRef();
    const startTimeRef = useRef(Date.now());
    const duration = 2000; 

    useEffect(() => {
        const statusSteps = [
            { t: 0, text: "Booting Softnova" },
            { t: 0.3, text: "Optimizing UI" },
            { t: 0.7, text: "Finalizing" },
            { t: 0.9, text: "Ready" }
        ];

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTimeRef.current;
            const p = Math.min(elapsed / duration, 1);

            const displayProgress = Math.floor(p * 100);
            setProgress(displayProgress);
            const currentStep = statusSteps.findLast(step => p >= step.t);
            if (currentStep) setStatus(currentStep.text);

            if (p < 1) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                setTimeout(() => finishLoading(), 300);
            }
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [finishLoading]);

    return (
        <motion.div
            className="loaderContainer"
            exit={{
                opacity: 0,
                scale: 1.05,
                transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
            }}
        >
            <div className="noiseOverlay" />
            <div className="gridBackground" />
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={`p-${i}`}
                    className="particle"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight + 100,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, -100],
                        opacity: [0, 0.4, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={`s-${i}`}
                    className="spark"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0
                    }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3
                    }}
                />
            ))}

            <div className="loaderContent">
                <motion.div
                    className="glow"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="splitText"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`t-left-${i}`}
                            className="mergeParticle"
                            initial={{ x: -150, opacity: 0 }}
                            animate={{ x: 0, opacity: [0, 0.4, 0] }}
                            transition={{
                                delay: 0.1 + i * 0.1,
                                duration: 1,
                                ease: "easeOut"
                            }}
                            style={{ left: '20%', top: '50%' }}
                        />
                    ))}

                    <motion.span
                        className="soft"
                        initial={{ x: -150, opacity: 0, letterSpacing: "0.5rem" }}
                        animate={{ x: 0, opacity: 1, letterSpacing: "-0.1rem" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1
                        }}
                    >
                        Soft
                    </motion.span>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`t-right-${i}`}
                            className="mergeParticle"
                            initial={{ x: 150, opacity: 0 }}
                            animate={{ x: 0, opacity: [0, 0.4, 0] }}
                            transition={{
                                delay: 0.1 + i * 0.1,
                                duration: 1,
                                ease: "easeOut"
                            }}
                            style={{ right: '20%', top: '50%' }}
                        />
                    ))}

                    <motion.span
                        className="nova"
                        initial={{ x: 150, opacity: 0, letterSpacing: "0.5rem" }}
                        animate={{ x: 0, opacity: 1, letterSpacing: "-0.1rem" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1
                        }}
                        style={{ marginLeft: '12px' }}
                    >
                        nova
                    </motion.span>
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`m-${i}`}
                            className="mergeParticle"
                            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: (Math.random() - 0.5) * 200,
                                y: (Math.random() - 0.5) * 200,
                            }}
                            transition={{
                                delay: 1.2,
                                duration: 1,
                                ease: "easeOut"
                            }}
                            style={{ left: '50%', top: '50%' }}
                        />
                    ))}
                </motion.div>

                <div className="progressWrapper">
                    <div className="modernProgressBar">
                        <motion.div
                            className="progressFill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="infoRow">
                        <span className="statusText">{status}</span>
                        <span className="percentageText">{progress}%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
