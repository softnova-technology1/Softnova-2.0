import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Web.module.css";
import img1 from "../../images/Product-images/web1.png";
import img2 from "../../images/Product-images/web2.png";
import img3 from "../../images/Product-images/web3.png";
import img4 from "../../images/Product-images/web4.png";
import img5 from "../../images/Product-images/web5.png";
import img6 from "../../images/Product-images/web6.png";
import img7 from "../../images/Product-images/web7.png";
import img8 from "../../images/Product-images/web8.png";
import img9 from "../../images/Product-images/web9.png";
import high from "../../images/Product-images/img.png";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const steps = [
  { id: 1, title: "Consultation", desc: "Understanding your needs and goals." },
  { id: 2, title: "Planning", desc: "Strategizing the best approach." },
  { id: 3, title: "Design", desc: "Creating intuitive UI/UX designs." },
  { id: 4, title: "Development", desc: "Building scalable websites." },
  { id: 5, title: "Launch & Support", desc: "Deployment & maintenance." }
];

const projects = [
  { title: "Agency Website", img: img1 },
  { title: "Branding Website", img: img2 },
  { title: "Business Website", img: img3 },
  { title: "Landing page Website", img: img4 },
  { title: "Consulting Website", img: img5 },
  { title: "Corporate Website ", img: img6 },
  { title: "Banking Website", img: img7 },
  { title: "Educational Website", img: img8 },
  { title: "Event Website", img: img9 },
  { title: "StartUp Website", img: img9 }
];

const WebDevelopment = () => {
  return (
    <section className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div 
            className={styles.textSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className={styles.tag}>Web Development</span>
            <h1 className={styles.title}>
              Smart <span>Web-Development</span> <br />
              for a digital first world
            </h1>
            <p>
              Softnova Technology specializes in developing advanced management
              software tailored for businesses, schools, and enterprises.
            </p>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className={styles.ctaButton}
            >
              <Link to="/career" style={{ color: 'inherit', textDecoration: 'none' }}>
                          Connect With Us
                        </Link>
            </motion.button>
          </motion.div>

          <motion.div 
            className={styles.visualSection}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <img src={high} alt="Web Development" />
          </motion.div>
        </div>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <motion.div 
            key={step.id} 
            className={styles.step}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ delay: i * 0.1 }}
          >
            <div className={styles.stepNumber}>{i + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} 
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
          >
            <div className={styles.imgWrapper}>
               <img src={project.img} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WebDevelopment;