import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Mobile.module.css";
import project1 from "../../images/Product-images/Ai.jpg";
import mobile from "../../images/Product-images/mobile.jpg";
import Breadcrumb from "../BreadCrumb";

const projects = [
  {
    id: 1,
    img: project1,
    title: "Mobile App",
    desc: "A seamless shopping experience with intuitive UI and secure payment integration for effortless online retail."
  },
  {
    id: 2,
    img: project1,
    title: "Delivery App",
    desc: "Real-time order tracking and optimized routing to ensure lightning-fast deliveries and customer satisfaction."
  },
  {
    id: 3,
    img: project1,
    title: "Management App",
    desc: "Streamline your workflow with powerful task organization, team collaboration tools, and insightful analytics."
  },
  {
    id: 4,
    img: project1,
    title: "Ticket Booking App",
    desc: "Hassle-free reservation system for movies, events, and travel with instant confirmation and digital passes."
  },
  {
    id: 5,
    img: project1,
    title: "E-Commerce",
    desc: "A comprehensive digital storefront featuring smart product filtering, personalized wishlists, and robust checkout."
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const MobileAppSection = () => {
  return (
    <>
    <Breadcrumb/>
    <section className={styles.mobileAppSection}>
      <div className={styles.container}>

        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.heroText}>
            <motion.span
              initial={{ letterSpacing: "0px" }}
              whileInView={{ letterSpacing: "3px" }}
              className={styles.tagLine}
            >
              MOBILE APP DEVELOPMENT
            </motion.span>
            <h1 className={styles.title}>
              <span>Mobile apps</span> <br />
              designed for speed, usability, and impact
            </h1>
            <p className={styles.description}>
              We develop intuitive, high-performance mobile applications for iOS
              and Android, tailored to your business objectives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fe851e", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaBtn}
            >
              Connect with us
            </motion.button>
          </div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <img src={mobile} alt="Mobile App" className={styles.floatingImage} />
            <div className={styles.orangeGlow}></div>
          </motion.div>
        </motion.div>


        <div className={styles.projectsSection}>
          <motion.div
            className={styles.projectsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className={styles.projectCard}
                variants={cardVariants}
                whileHover={{ y: -15 }}
              >
                <div className={styles.cardImageContainer}>
                  <img src={project.img} alt={project.title} />
                </div>
                <div className={styles.cardContent}>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <div className={styles.cardFooter}>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className={styles.arrow}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
};

export default MobileAppSection;