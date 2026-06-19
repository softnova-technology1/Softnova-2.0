import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Web.module.css";
import img1 from "../../images/Ourservices-images/agency.png";
import img2 from "../../images/Ourservices-images/brand.avif";
import img3 from "../../images/Ourservices-images/bussines.webp";
import img4 from "../../images/Ourservices-images/landing.jpg";
import img5 from "../../images/Ourservices-images/consult.png";
import img6 from "../../images/Ourservices-images/corparate.avif";
import img7 from "../../images/Ourservices-images/banking.jpg";
import img8 from "../../images/Ourservices-images/education.avif";
import img9 from "../../images/Ourservices-images/event.jpg";
import high from "../../images/Ourservices-images/startup.png";
import front from "../../images/Ourservices-images/webdev1.png";
import blackCircleImg from "../../images/Ourservices-images/black-circle.png";
import bgWeb from "../../images/Ourservices-images/bg-web.avif";
import Breadcrumb from "../BreadCrumb";

import { Link } from "react-router-dom";
import { FiMessageSquare, FiMap, FiPenTool, FiCode } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

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
  { id: 1, title: "Consultation", desc: "Understanding your needs and goals.", icon: <FiMessageSquare /> },
  { id: 2, title: "Planning", desc: "Strategizing the best approach.", icon: <FiMap /> },
  { id: 3, title: "Design", desc: "Creating intuitive UI/UX designs.", icon: <FiPenTool /> },
  { id: 4, title: "Development", desc: "Building scalable websites.", icon: <FiCode /> },
  { id: 5, title: "Launch & Support", desc: "Deployment & maintenance.", icon: <FaRocket /> }
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
  { title: "StartUp Website", img: high }
];

const WebDevelopment = () => {
  return (
    <>
      <Breadcrumb />
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
              <div className={styles.headerContainer}>
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
                  <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Connect With Us
                  </Link>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className={styles.visualSection}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <img loading="lazy" src={front} alt="Web Development" />
            </motion.div>
          </div>
        </div>

        <section className={styles.timelineSectionWrapper} style={{ backgroundImage: `url(${bgWeb})` }}>
          <div className={styles.timelineSectionContainer}>
          <div className={styles.timelineTop}>
            <div className={styles.timelineHeader}>
              <div className={styles.orangeLine}></div>
              <h2>OUR PROCESS</h2>
            </div>
            <motion.div 
              className={styles.timelineImage}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img loading="lazy" src={blackCircleImg} alt="Process Illustration" />
            </motion.div>
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
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepDivider}></div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <div className={styles.orangeLine}></div>
          <h2>OUR PROJECTS</h2>
        </div>
        <div className={styles.gridContainer}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
            >
              <div className={styles.imgWrapper}>
                <img loading="lazy" src={project.img} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      </section>
    </>
  );
};

export default WebDevelopment;