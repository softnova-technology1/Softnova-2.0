import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import ParticleSystem from "../Home/particalSystem";
import styles from "../../Styles/Hero.module.css";
import OurBestServices from "./Ourservices";
import CompanySection from "./Compnay";
import WhyChooseSoftNova from "./Whychoose";
import AgricultureHero from "./Academy";
import Features from "./Features";
import FeaturesCard from "./Card";
import Workflow from "./WorkFlow";
import GetStarted from "./Getstarted";
import darkDimTechBg from "../../images/it_slide_1.png";
import techControlCenter from "../../images/it_slide_2.png";
import whyChooseBg from "../../images/it_slide_3.png";
import { useLocation, useNavigate } from "react-router-dom";
import softLogo from "../../images/soft-logo.png";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Premium floating background shape assets
import floatingSphere from "../../images/floating_gold_sphere.png";
import floatingTorus from "../../images/floating_glass_torus.png";
import floatingNode from "../../images/floating_tech_node.png";
import float5 from "../../images/float5.png"
import float4 from "../../images/float4.png"
const Hero = () => {
  const [shape] = useState("wave");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();
  const slides = [darkDimTechBg, techControlCenter, whyChooseBg];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className={styles.mainWrapper}>
      {/* Floating 3D Ornaments */}
      <img src={floatingSphere} className={`${styles.ornament} ${styles.ornament1}`} alt="" />
      <img src={floatingTorus} className={`${styles.ornament} ${styles.ornament2}`} alt="" />
      <img src={floatingNode} className={`${styles.ornament} ${styles.ornament3}`} alt="" />
      <img src={float4} className={`${styles.ornament} ${styles.ornament4}`} alt="" />
      <img src={float5} className={`${styles.ornament} ${styles.ornament5}`} alt="" />

      <section className={styles.container}>
        <div className={styles.slideshow}>
          {slides.map((slideImg, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ""}`}
              style={{ backgroundImage: `url(${slideImg})` }}
            />
          ))}
        </div>

        <div className={styles.darkLayer}></div>

        <div className={styles.canvas}>
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
        </div>

        <motion.div
          className={styles.overlay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Background Vector Wave Lines */}
          <div className={styles.vectorLines}>
            <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100,200 C300,50 600,600 1600,100" stroke="rgba(254, 133, 30, 0.15)" strokeWidth="1.2" />
              <path d="M-100,240 C300,90 600,640 1600,140" stroke="rgba(254, 133, 30, 0.11)" strokeWidth="1.2" />
              <path d="M-100,280 C300,130 600,680 1600,180" stroke="rgba(254, 133, 30, 0.08)" strokeWidth="1.2" />
              <path d="M-100,320 C300,170 600,720 1600,220" stroke="rgba(254, 133, 30, 0.04)" strokeWidth="1.2" />
            </svg>
          </div>

          <motion.div className={styles.logoContainer} variants={itemVariants}>
            <img src={softLogo} className={styles.logo} alt="Softnova Logo" />
          </motion.div>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Sterling IT Solutions
          </motion.h1>
          <motion.h6 className={styles.subtitle} variants={itemVariants}>
            <span className={styles.cursiveText}>To </span>
            <span className={styles.boxedText}>drive</span>
            <span className={styles.cursiveText}> your success</span>
          </motion.h6>

          <div className={styles.contentRow}>
            <motion.p className={styles.description} variants={itemVariants}>
              We build dynamic websites, powerful e-commerce platforms, and lead
              generation systems tailored to drive your business.
            </motion.p>
            <motion.div className={styles.largeStat} variants={itemVariants}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.cursiveText}>Years Exp</span>
            </motion.div>
          </div>

          <motion.div className={styles.bottomBar} variants={itemVariants}>
            <div className={styles.bottomLeftStrip}>
              <button className={styles.joinBtn} onClick={() => navigate("/contact")}>
                <span className={styles.diamond}></span>
                JOIN OUR TEAM
              </button>
              {/* <div className={styles.infoStrip}>
                <span className={styles.dateIcon}>📅</span>
                <span className={styles.infoText}>12–14 August 2026</span>
                <span className={styles.divider}>|</span>
                <span className={styles.locIcon}>📍</span>
                <span className={styles.infoText}>Silicon Avenue, San Francisco, USA</span>
              </div> */}
            </div>

            <div className={styles.slideshowControls}>
              <button onClick={handlePrev} className={styles.controlBtn} aria-label="Previous Slide">
                <ChevronLeft size={18} />
              </button>
              <button onClick={togglePlay} className={styles.controlBtn} aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button onClick={handleNext} className={styles.controlBtn} aria-label="Next Slide">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <ScrollSection><OurBestServices /></ScrollSection>
      <ScrollSection><CompanySection /></ScrollSection>
      <WhyChooseSoftNova />
      <AgricultureHero />
      <ScrollSection><Features /></ScrollSection>
      <ScrollSection><FeaturesCard /></ScrollSection>
      <Workflow />
      <ScrollSection><GetStarted /></ScrollSection>
    </div>
  );
};


const ScrollSection = ({ children }) => (
  <div className={styles.scrollSectionWrapper}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </div>
);

export default Hero;