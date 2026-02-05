import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import styles from "../../Styles/Other.module.css";
import { Settings, Cpu, Database, Share2, ArrowRight, X } from "lucide-react"; // Added X icon
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";

const services = [
  { id: "01", title: "Business Automation", description: "...", icon: <Settings size={32} /> },
  { id: "02", title: "AI & ML Solutions", description: "...", icon: <Cpu size={32} /> },
  { id: "03", title: "API Integration", description: "...", icon: <Share2 size={32} /> },
  { id: "04", title: "Cloud Infrastructure", description: "...", icon: <Database size={32} /> },
];

const OtherServices = () => {
  const [activeCanvas, setActiveCanvas] = useState(null); // Track which service canvas is open

  return (
    <>
      <Breadcrumb />
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className={styles.tag}>Premium Solutions</span>
            <h1 className={styles.mainTitle}>Strategic Services for <br /> <span>Next-Gen Evolution.</span></h1>
          </motion.div>

          <div className={styles.listWrapper}>
            {services.map((service, index) => (
              <motion.div key={service.id} className={styles.listItem} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
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
                  onClick={() => setActiveCanvas(service)} // TRIGGER CANVAS
                >
                  Learn More <ArrowRight size={20} />
                </motion.button>
                <div className={styles.hoverBg}></div>
              </motion.div>
            ))}
          </div>

          <div className={styles.footerAction}>
            <button className={styles.cta}><Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>Connect With Us</Link></button>
          </div>
        </div>
      </section>

      {/* --- CANVAS OVERLAY LAYER --- */}
      <AnimatePresence>
        {activeCanvas && (
          <motion.div 
            className={styles.canvasOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.closeCanvas} onClick={() => setActiveCanvas(null)}>
              <X size={40} />
            </button>

            <div className={styles.canvasContent}>
               <motion.div 
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                className={styles.glassCard}
               >
                 <div className={styles.canvasIcon}>{activeCanvas.icon}</div>
                 <h2>{activeCanvas.title}</h2>
                 <p>{activeCanvas.description}</p>
                 <div className={styles.techStack}>
                    <span>Dynamic</span> • <span>Scalable</span> • <span>Secure</span>
                 </div>
               </motion.div>
            </div>
            
            {/* Animated Background Elements for "Canvas" feel */}
            <div className={styles.canvasParticles}>
                {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className={styles.blob}
                        animate={{
                            x: [0, Math.random() * 100, 0],
                            y: [0, Math.random() * 100, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
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