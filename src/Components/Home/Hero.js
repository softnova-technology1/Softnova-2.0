// import React, { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { PerspectiveCamera } from "@react-three/drei";
// import ParticleSystem from "../Home/particalSystem";
// import styles from "../../Styles/Hero.module.css";
// import OurBestServices from "./Ourservices";
// import CompanySection from "./Compnay";
// import WhyChooseSoftNova from "./Whychoose";
// import AgricultureHero from "./Academy";
// import Features from "./Features";
// import FeaturesCard from "./Card";
// import Workflow from "./WorkFlow";

// const Hero = () => {
//   const [shape] = useState("wave");

//   return (
//     <>
//       <section className={styles.container}>
//         <Canvas className={styles.canvas}>
//           <PerspectiveCamera makeDefault position={[0, 0, 10]} />
//           <ambientLight intensity={0.5} />
//           <ParticleSystem
//             currentShape={shape}
//             color="#fe851e"
//             speed={1.2}
//             size={0.02}
//           />
//         </Canvas>

//         <div className={styles.overlay}>
//           <h1 className={styles.title}>STERLING IT SERVICE</h1>
//           <h6 className={styles.subtitle}>To drive your success</h6>
//           <p className={styles.description}>
//             We build dynamic websites, powerful e-commerce platforms, and lead
//             generation systems tailored to drive your business success.
//           </p>
//         </div>
//       </section>

//       <OurBestServices />
//        <CompanySection />
//       <WhyChooseSoftNova />
//       <AgricultureHero />
//       <Workflow/>
//       <Features />
//       <FeaturesCard />
//     </>
//   );
// };

// export default Hero;

import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ParticleSystem from "../Home/particalSystem";
import styles from "../../Styles/Hero.module.css";

import OurBestServices from "./Ourservices";
import CompanySection from "./Compnay";
import WhyChooseSoftNova from "./Whychoose";
import AgricultureHero from "./Academy";
import Features from "./Features";
import FeaturesCard from "./Card";
import Workflow from "./WorkFlow";
import videoSrc from "../../images/Video1.mp4";
import GetStarted from "./Getstarted";



const Hero = () => {
  const [shape] = useState("wave");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
    
   
      <section className={styles.container}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
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

        <div className={styles.overlay}>
          <h1 className={styles.title}>STERLING IT SERVICE</h1>
          <h6 className={styles.subtitle}>To drive your success</h6>
          <p className={styles.description}>
            We build dynamic websites, powerful e-commerce platforms, and lead
            generation systems tailored to drive your business success.
          </p>
        </div>
      </section>

      <OurBestServices />
      <CompanySection />
      <WhyChooseSoftNova />
      <AgricultureHero />
      <Features />
      <FeaturesCard />
      <Workflow />
      <GetStarted />
    </>
  );
};

export default Hero;
