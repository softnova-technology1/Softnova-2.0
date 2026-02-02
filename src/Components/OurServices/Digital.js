import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Digital.module.css";
import img1 from "../../images/Product-images/Ai.jpg";
import { Link } from "react-router-dom";
const services = [
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", title: "SEO Optimization" },
  { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7", title: "Social Media Marketing" },
  { img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4", title: "Pay Per Click" },
  { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "Content Marketing" },
  { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216", title: "Email Marketing" },
];

const DigitalMarketing = () => {
  return (
    <div className={styles.pageContainer}>
      
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <motion.div 
            className={styles.textBox}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={styles.tag}>
              Digital <span>Marketing</span>
            </span>
            <h1 className={styles.title}>
              Driving growth through smart <span>digital strategies.</span>
            </h1>
            <p>
              Smart digital strategies that boost brand visibility,
              engagement, and ROI through data-driven execution.
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
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <img src={img1} alt="Digital" className={styles.rotateImg} />
            <div className={styles.glow}></div>
          </motion.div>
        </div>
      </section>

     
      <section className={styles.marqueeSection}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.marqueeHeading}
        >
          <h2>Our Core Services</h2>
        </motion.div>

        <div className={styles.marquee}>
          <motion.div 
            className={styles.marqueeTrack}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "linear" 
            }}
          >
            {services.concat(services).map((item, index) => (
              <div key={index} className={styles.marqueeCard}>
                <div className={styles.cardImage}>
                   <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className={styles.svg}>
    <path className={styles.fil0} d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
  </svg>
);

export default DigitalMarketing;