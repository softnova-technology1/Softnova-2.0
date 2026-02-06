import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion"; 
import ParticleSystem from "../Home/particalSystem";
import styles from "../../Styles/Hero.module.css";
// import butterfly from "../../images/butterfly.webp";
import OurBestServices from "./Ourservices";
import CompanySection from "./Compnay";
import WhyChooseSoftNova from "./Whychoose";
import AgricultureHero from "./Academy";
import Features from "./Features";
import FeaturesCard from "./Card";
import Workflow from "./WorkFlow";
import videoSrc from "../../images/Video2.mp4";
import GetStarted from "./Getstarted";
import { useLocation } from "react-router-dom";



const Hero = () => {
  const [shape] = useState("wave");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

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
    <div style={{ width: "100%", overflowX: "hidden" }}> 
      <section className={styles.container}>
        <video ref={videoRef} className={styles.video} autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>

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
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1 className={styles.title} variants={itemVariants} style={{display:"flex"}}>
            
            STERLING IT  SERVICE
          </motion.h1>
          <motion.h6 className={styles.subtitle} variants={itemVariants}>
            To drive your success
          </motion.h6>
          <motion.p className={styles.description} variants={itemVariants}>
            We build dynamic websites, powerful e-commerce platforms, and lead
            generation systems tailored to drive your business success.
          </motion.p>
        </motion.div>
      </section>

      
      <ScrollSection><OurBestServices /></ScrollSection>
      <ScrollSection><CompanySection /></ScrollSection>
      <ScrollSection><WhyChooseSoftNova /></ScrollSection>
      <ScrollSection><AgricultureHero /></ScrollSection>
      <ScrollSection><Features /></ScrollSection>
      <ScrollSection><FeaturesCard /></ScrollSection>
      <ScrollSection><Workflow /></ScrollSection>
      <ScrollSection><GetStarted /></ScrollSection>
    </div>
  );
};


const ScrollSection = ({ children }) => (
  <div className={styles.scrollSectionWrapper}>
    <motion.div
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </div>
);

export default Hero;