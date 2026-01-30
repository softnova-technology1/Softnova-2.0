import React from "react";
import { motion } from "framer-motion"; // Animation library
import styles from "../../Styles/Mobile.module.css";
import project1 from "../../images/Product-images/Ai.jpg";
import mobile from "../../images/Product-images/mobile.jpg";

const projects = [
  { id: 1, img: project1, title: "E-Commerce Mobile App", desc: "A seamless shopping experience with intuitive UI and secure payment integration." },
  { id: 2, img: project1, title: "Fitness Tracker", desc: "Track your workouts, set goals, and monitor your progress on the go." },
  { id: 3, img: project1, title: "Social Media App", desc: "Connect with friends, share updates, and stay engaged with real-time notifications." },
  { id: 4, img: project1, title: "Social Media App", desc: "Connect with friends, share updates, and stay engaged with real-time notifications." },
  { id: 5, img: project1, title: "Social Media App", desc: "Connect with friends, share updates, and stay engaged with real-time notifications." },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Ovoru card-um gap vittu varum
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
    <section className={styles.mobileAppSection}>
      <div className={styles.container}>
        
        {/* HERO SECTION */}
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

        {/* PROJECTS GRID */}
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
                whileHover={{ y: -15 }} // Hover pannum pothu mela pogum
              >
                <div className={styles.cardImageContainer}>
                  <img src={project.img} alt={project.title} />
                  <motion.div 
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    View Project
                  </motion.div>
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
  );
};

export default MobileAppSection;