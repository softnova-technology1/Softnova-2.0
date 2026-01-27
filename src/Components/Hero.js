import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ParticleSystem from "../Components/particalSystem";
import styles from "../Styles/Hero.module.css";
import OurBestServices from "./Ourservices";
import CompanySection from "./Compnay";
import WhyChooseSoftNova from "./Whychoose";
import AcademyHero from "./Academy";
import AgricultureHero from "./Academy";
import Features from "./Features";
import FeaturesCard from "./Card";


const Hero = () => {
  const [shape] = useState("wave");

  return (
    <>
      <section className={styles.container}>
       
        <Canvas className={styles.canvas}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <ambientLight intensity={0.5} />
          <ParticleSystem
            currentShape={shape}
            color="#fe851e"
            speed={1.2}
            size={0.05}
          />
        </Canvas>

    
        <div className={styles.overlay}>
          <h1 className={styles.title}>STERLING IT SERVICE</h1>
          <h6 className={styles.subtitle}>To drive your success</h6>
          <p className={styles.description}>
            We build dynamic websites, powerful e-commerce platforms, and lead
            generation systems tailored to drive your business success.
          </p>
        </div>
      </section>
      <CompanySection />
      <OurBestServices />
      <WhyChooseSoftNova/>
      <AgricultureHero/>
      <Features/>
      <FeaturesCard/>
      <Footer/>
    </>
  );
};

export default Hero;
