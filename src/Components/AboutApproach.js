import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../Styles/Approach.module.css";
import { FaProjectDiagram, FaUsers, FaSmile, FaBriefcase } from "react-icons/fa";
import img1 from '../images/About-Images/pro1.png';
import img2 from '../images/About-Images/pro2.png';
import img3 from '../images/About-Images/pro3.png';
import img4 from '../images/About-Images/pro4.png';

// Stats Data
const statsData = [
    { icon: <FaProjectDiagram />, value: 50, suffix: "+", label: "Successful Projects" },
    { icon: <FaUsers />, value: 20, suffix: "+", label: "Experts" },
    { icon: <FaSmile />, value: 97, suffix: "%", label: "Happy Clients" },
    { icon: <FaBriefcase />, value: 1, suffix: "+", label: "Year Of Experience" },
];

// Approach Steps
const steps = [
    { id: 1, title: "Assess Infrastructure", pos: "top-left" },
    { id: 2, title: "Define Strategic Goals", pos: "top-right" },
    { id: 3, title: "Modern Technologies", pos: "right" },
    { id: 4, title: "Scalable IT Strategy", pos: "bottom-right" },
    { id: 5, title: "Change Management", pos: "bottom-left" },
    { id: 6, title: "Optimize Performance", pos: "left" },
];

// Product Images
const images = [img1, img2, img3, img4];

// Counter Component
const Counter = ({ value, suffix, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        setCount(0);
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentValue = Math.floor(progress * value);
            setCount(currentValue);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [value, start]);

    return <h3 className={styles.number}>{count}{suffix}</h3>;
};

// Star SVG
const StarSvg = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className={className}>
        <path
            className={styles.fil0}
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
      207.96,29.37 371.12,197.68 392.05,407.74
      20.93,-210.06 184.09,-378.37 392.05,-407.74
      -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        />
    </svg>
);

const Stats = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    // Intersection observer to trigger counter every scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setStartCount(entry.isIntersecting),
            { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Approach / Network Section */}
            <motion.div
                className={styles.wrapper}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.mainTitle}>
                    Our Systematic Approach to <br />
                    <span className={styles.highlight}>Organizational Changes</span>
                </h1>

                <div className={styles.networkContainer}>
                    {/* SVG Lines - Connecting core to nodes */}
                    <svg className={styles.svgLines}>
                        <line x1="50%" y1="50%" x2="20%" y2="20%" className={styles.line} />
                        <line x1="50%" y1="50%" x2="80%" y2="20%" className={styles.line} />
                        <line x1="50%" y1="50%" x2="85%" y2="50%" className={styles.line} />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" className={styles.line} />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" className={styles.line} />
                        <line x1="50%" y1="50%" x2="15%" y2="50%" className={styles.line} />
                    </svg>

                    {/* Center Node */}
                    <div className={styles.coreNode}>
                        <div className={styles.coreInner}>
                            <span className={styles.brand}>SOFTNOVA</span>
                            <div className={styles.pulse}></div>
                        </div>
                    </div>

                    {/* Peripheral Nodes */}
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            className={`${styles.node} ${styles[step.pos]}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className={styles.nodeCard}>
                                <div className={styles.nodeDot}></div>
                                <p>{step.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Stats Section */}
            <motion.section
                ref={sectionRef}
                className={styles.statsSection}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.heading}>Established Experience & Consistent Results</h2>

                <div className={styles.statsRow}>
                    {statsData.map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.statItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <Counter value={item.value} suffix={item.suffix} start={startCount} />
                            <p className={styles.label}>{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

           
            <motion.section
                className={styles.productSection}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.content}>
                    <h2>OUR PRODUCT & SERVICE</h2>
                    <p>
                        We provide both premium products and exceptional<br />
                        services, ensuring that our customers not only receive high-quality<br />
                        items but also ongoing support and expertise.
                    </p>

                    <motion.button
                        className={styles.starButton}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    ><a className={styles.stara} href="/contact">
                        Connect With Us
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={styles[`star${i + 1}`]}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.2 + i * 0.15 }}
                            >
                                <StarSvg />
                            </motion.div>
                        ))}
                        </a>
                    </motion.button>
                </div>

                <div className={styles.frameGrid}>
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            className={styles.frameCard}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <img src={img} alt={`service ${i + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </>
    );
};

export default Stats;
