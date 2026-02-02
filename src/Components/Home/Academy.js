import { Container } from "react-bootstrap";
import { motion } from "framer-motion"; 
import styles from "../../Styles/Academy.module.css";
import academy from "../../images/academygirl.jpg";

export default function AcademyHero() {
  
  // 1. Container variants - for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Oru element vandhu 0.2s gap-la aduthadhu varum
      },
    },
  };

  // 2. Individual item variants (Text, Button)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Keezha irundhu 50px gap-la start aagum
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 3. Image specific animation
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // Left side-la irundhu varum
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <Container>
      {/* Outer motion.section is the trigger. 
          When this enters the viewport, animations start.
      */}
      <motion.section 
        className={styles.hero}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // once: false kudutha eppo scroll pannalum animation aagum
      >
        
        {/* Image Section */}
        <motion.div 
          className={styles.imageWrap}
          variants={imageVariants}
        >
          <img src={academy} alt="Academy" className={styles.image} />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className={styles.content}
          variants={containerVariants}
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            Academy
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Our approach is rooted in a deep understanding of the industries we
            serve, allowing us to combine technical expertise with creative
            insights to deliver high-performing websites...
          </motion.p>

          <motion.div className={styles.iconRow} variants={itemVariants}>
            {["html", "css", "java", "react", "mongo"].map((tech, index) => (
              <motion.div 
                key={index} 
                className={`${styles.icon} ${styles[tech]}`}
                whileHover={{ scale: 1.2 }}
              >
                {tech.toUpperCase()}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.buttonRow} variants={itemVariants}>
            <a href="https://softnovatechnology.com/" target="_blank" rel="noreferrer">
              <button className={styles.starButton}>
                Show More
                <div className={styles.star1}><StarSvg /></div>
                <div className={styles.star2}><StarSvg /></div>
                <div className={styles.star3}><StarSvg /></div>
                <div className={styles.star4}><StarSvg /></div>
                <div className={styles.star5}><StarSvg /></div>
                <div className={styles.star6}><StarSvg /></div>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </Container>
  );
}

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className={styles.svg}>
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
         207.96,29.37 371.12,197.68 392.05,407.74
         20.93,-210.06 184.09,-378.37 392.05,-407.74
         -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);