import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import styles from "../../Styles/E-Commerce.module.css";
import p1 from "../../images/Product-images/Ai.jpg";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import shan from "../../images/Product-images/online.jpg";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "E-Commerce Website", image: p1, category: "Web Solution", desc: "A robust online store with advanced filtering and seamless checkout." },
  { id: 2, title: "Mobile Shopping App", image: p1, category: "Mobile App", desc: "Fast and responsive mobile application for on-the-go shopping." },
  { id: 3, title: "B2B Marketplace", image: p1, category: "Enterprise", desc: "Scalable platform for business-to-business transactions and bulk orders." },
  { id: 4, title: "Custom Dashboard", image: p1, category: "Analytics", desc: "Insightful data visualization tools for managing e-commerce performance." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const ProjectsFlip = () => {
  // --- Canvas State Logic ---
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openCanvas = (project) => {
    setSelectedProject(project);
    setIsCanvasOpen(true);
  };

  const closeCanvas = () => {
    setIsCanvasOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Breadcrumb/>
      <div className={styles.mainPage}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div 
              className={styles.content}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.tag}>E-Commerce Solutions</span>
              <h1 className={styles.title}>
                Powerful <span>E-Commerce</span> <br />
                Portal for Your Business
              </h1>
              <p className={styles.description}>
                We design and develop secure, scalable, and feature-rich portals
                with seamless payment integration.
              </p>
              <div className={styles.actions}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.primaryBtn}
                >
                  <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Connect With Us
                  </Link> <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.cardContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={shan} alt="Ecommerce" className={styles.heroImage} />
                <div className={styles.glowEffect}></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className={styles.heading}
            >
              Case Studies
            </motion.h2>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.projectMinimal}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.title} />
                  
                  <motion.div 
                    className={styles.projectOverlay}
                    whileHover={{ opacity: 1 }}
                  >
                      <div className={styles.topInfo}>
                        <span className={styles.catName}>{item.category}</span>
                        <h3>{item.title}</h3>
                      </div>
                      
                      {/* --- Clickable Arrow --- */}
                      <motion.div 
                        className={styles.roundBtn}
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        onClick={() => openCanvas(item)} // Trigger Canvas
                        style={{ cursor: 'pointer' }}
                      >
                        <ArrowUpRight size={24} className={styles.arrowIcon} />
                      </motion.div>
                      
                      <div className={styles.accentLine}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* --- Side Canvas Component --- */}
      <AnimatePresence>
        {isCanvasOpen && (
          <>
            <motion.div 
              className={styles.canvasOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCanvas}
            />
            <motion.div 
              className={styles.sideCanvas}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button className={styles.closeBtn} onClick={closeCanvas}>
                ✕ Remove
              </button>
              
              <div className={styles.canvasBody}>
                {selectedProject && (
                  <>
                    <img src={selectedProject.image} alt={selectedProject.title} className={styles.canvasImg} />
                    <span className={styles.canvasTag}>{selectedProject.category}</span>
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.desc}</p>
                    <div className={styles.canvasMeta}>
                      <p><strong>Status:</strong> Completed</p>
                      <p><strong>Service:</strong> Enterprise Solution</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsFlip;