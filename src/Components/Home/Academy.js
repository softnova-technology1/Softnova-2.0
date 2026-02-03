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
        staggerChildren: 0.2, 
      },
    },
  };

  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, 
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
        viewport={{ once: false, amount: 0.2 }} 
      >
        {/* Image Section */}
        <motion.div className={styles.imageWrap} variants={imageVariants}>
          <img src={academy} alt="Academy" className={styles.image} />
        </motion.div>

        {/* Content Section */}
        <motion.div className={styles.content} variants={containerVariants}>
          <motion.h1 className={styles.title} variants={itemVariants}>
            Academy
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            SoftNova understands that every business is unique, which is why we
            provide tailored digital solutions that help brands stand out in a
            competitive market. We develop personalized strategies that include
            custom website design, effective lead generation, and comprehensive
            digital marketing services. Our team blends technical expertise with
            creative insight to build high-performing websites, e-commerce
            platforms, and mobile applications that align with your business
            goals. With experience across diverse industries, we focus on
            seamless integration, enhanced user experience, and measurable
            results. From web development and SEO to end-to-end digital
            solutions, we act not just as service providers but as dedicated
            growth partners, delivering innovative and scalable solutions that
            drive long-term success.
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
            <a
              href="https://softnovatechnology.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.starButton}>
                Show More
                <div className={styles.star1}>
                  <StarSvg />
                </div>
                <div className={styles.star2}>
                  <StarSvg />
                </div>
                <div className={styles.star3}>
                  <StarSvg />
                </div>
                <div className={styles.star4}>
                  <StarSvg />
                </div>
                <div className={styles.star5}>
                  <StarSvg />
                </div>
                <div className={styles.star6}>
                  <StarSvg />
                </div>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </Container>
  );
}

const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className={styles.svg}
  >
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
         207.96,29.37 371.12,197.68 392.05,407.74
         20.93,-210.06 184.09,-378.37 392.05,-407.74
         -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);
