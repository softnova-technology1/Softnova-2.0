import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Other.module.css";
import { Settings, Cpu, Database, Share2, ArrowRight, X } from "lucide-react";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import CareerHero from "./Otherpart";

const services = [
  {
    id: "01",
    title: "Business Automation",
    description: "Streamline operations and automate workflows to boost productivity and reduce manual effort.",
    icon: <Settings size={32} />,
  },
  {
    id: "02",
    title: "AI & ML Solutions",
    description: "Intelligent systems powered by AI & ML to predict, analyze, and automate decision-making.",
    icon: <Cpu size={32} />,
  },
  {
    id: "03",
    title: "API Integration",
    description: "Seamlessly connect your software with third-party services using robust API architectures.",
    icon: <Share2 size={32} />,
  },
  {
    id: "04",
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions to ensure your business data is always secure and accessible.",
    icon: <Database size={32} />,
  },
];

const OtherServices = () => {
  const [activeCanvas, setActiveCanvas] = useState(null);

  const openCanvas = (service) => {
    setActiveCanvas(service);
    document.body.style.overflow = "hidden";
  };

  const closeCanvas = () => {
    setActiveCanvas(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Breadcrumb />
      <section className={styles.section}>
        <CareerHero />
        <div className={styles.container}>
          <div className={styles.listWrapper}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={styles.listItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.listContent}>
                  <span className={styles.id}>{service.id}</span>
                  <div className={styles.iconBox}>{service.icon}</div>
                  <div className={styles.textDetails}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className={styles.exploreBtn}
                  onClick={() => openCanvas(service)}
                >
                  Learn More <ArrowRight size={20} />
                </motion.button>

                <div className={styles.hoverBg}></div>
              </motion.div>
            ))}
          </div>

          <div className={styles.footerAction}>
            <button className={styles.cta}>
              <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Connect With Us
              </Link>
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCanvas && (
          <motion.div
            className={styles.canvasOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.closeCanvas} onClick={closeCanvas}>
              <X size={30} /> <span>Remove</span>
            </button>

            <div className={styles.canvasContent}>
              <motion.div
                className={styles.glassCard}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
              >
                <div className={styles.canvasIcon}>{activeCanvas.icon}</div>
                <span className={styles.canvasTag}>Premium Service {activeCanvas.id}</span>
                <h2 className={styles.canvasTitle}>{activeCanvas.title}</h2>
                <p className={styles.canvasDesc}>
                  {activeCanvas.description} Our advanced {activeCanvas.title} solutions are designed to scale with your business needs, ensuring high performance and 24/7 reliability.
                </p>
                <div className={styles.techStack}>
                  <span>Dynamic</span> • <span>Scalable</span> • <span>Secure</span>
                </div>

                <button className={styles.canvasBackBtn} onClick={closeCanvas}>
                  Back to Services
                </button>
              </motion.div>
            </div>

            <div className={styles.canvasParticles}>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.blob}
                  animate={{
                    x: [0, Math.random() * 150, -150, 0],
                    y: [0, Math.random() * 150, -150, 0],
                    scale: [1, 1.2, 0.8, 1],
                  }}
                  transition={{
                    duration: 15 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OtherServices;