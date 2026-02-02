import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Graphic.module.css";
import desktop from "../../images/Product-images/tea.jpg";
import img1 from "../../images/Product-images/web1.png";
import img2 from "../../images/Product-images/web2.png";
import img3 from "../../images/Product-images/web3.png";
import img4 from "../../images/Product-images/web4.png";
import img5 from "../../images/Product-images/web5.png";
import img6 from "../../images/Product-images/web6.png";
import Breadcrumb from "../BreadCrumb";

import { Link } from "react-router-dom";
const services = [
  { title: "Creative Branding & Logo", img: img1 },
  { title: "UI / UX Design", img: img2},
  { title: "Web Development", img:img3 },
  { title: "Mobile App Design", img: img4},
  { title: "Digital Marketing", img:img5 },
  { title: "Product Strategy", img:img6 }
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const GraphicDesign = () => {
  return (
    <>
    <Breadcrumb/>
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.content}>
          <motion.div 
            className={styles.textBox}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.tag}>
              Graphic <span>Design</span>
            </span>
            <h1 className={styles.title}>
              Bringing your brand to life through <span>design</span>
            </h1>
            <p>
              Softnova Technology’s graphic design expertise helps businesses
              stand out in a competitive market by delivering high-quality,
              professional, and engaging visuals.
            </p>

            <motion.button 
              className={styles.starButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
            Connect With Us
          </Link>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={styles[`star${i + 1}`]}><StarSvg /></div>
              ))}
            </motion.button>
          </motion.div>

          <motion.div 
            className={styles.visualBox}
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, type: "spring" }}
          >
            <img src={desktop} alt="Desktop" className={styles.desktop} />
          </motion.div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <motion.div 
          className={styles.servicesGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((item, index) => (
            <motion.div 
              className={styles.serviceCard} 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              <div className={styles.serviceImage}>
                <img src={item.img} alt={item.title} />
                <div className={styles.cardOverlay} />
              </div>
              <h3 className={styles.serviceTitle}>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
    </>
  );
};

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className={styles.svg}>
    <path className={styles.fil0} d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
  </svg>
);

export default GraphicDesign;