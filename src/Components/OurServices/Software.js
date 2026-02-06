import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Software.module.css";
import software1 from "../../images/Ourservices-images/Software1.webp";
import software2 from "../../images/Ourservices-images/Software2.webp";
import software3 from "../../images/Ourservices-images/Software3.webp";
import software4 from "../../images/Ourservices-images/Software4.webp";
import software5 from "../../images/Ourservices-images/Software5.webp";
import software6 from "../../images/Ourservices-images/Software6.webp";
import { ArrowRight, X } from "lucide-react";
import shan from "../../images/Ourservices-images/software.webp";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";

const projects = [
  { title: "ERP System", image: software1, category: "Enterprise", desc: "Complete resource planning solution." },
  { title: "Custom CRM", image: software2, category: "Business", desc: "Customer relationship management." },
  { title: "Inventory Manager", image: software3, category: "Logistics", desc: "Real-time stock tracking." },
  { title: "School Management", image: software4, category: "Education", desc: "Digital campus administration." },
  { title: "Hospital Portal", image: software5, category: "Healthcare", desc: "Patient and staff management." },
  { title: "Fintech App", image: software6, category: "Finance", desc: "Secure banking and payments." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const SoftwareDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Breadcrumb />

      <div className={`${styles.pageWrapper} ${selectedProject ? styles.blurred : ""}`}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div
              className={styles.content}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className={styles.tag}>Software Development</span>
              <h1 className={styles.title}>
                Tailored <span>Software Solutions</span> <br />
                for Modern Enterprises
              </h1>
              <p className={styles.description}>
                Softnova Technology delivers high-quality, scalable, and efficient
                custom software solutions. We focus on application design and
                system integration to ensure your business stays ahead.
              </p>
              <div className={styles.actions}>
                <motion.button whileHover={{ scale: 1.05 }} className={styles.primaryBtn}>
                  <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Connect With Us
                  </Link>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              <img src={shan} alt="Software Development" />
            </motion.div>
          </div>
        </section>

        <section className={styles.wrapper}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            <h2 className={styles.heading}>Our Software Portfolio</h2>
            <div className={styles.line}></div>
          </motion.div>

          <motion.div
            className={styles.projectsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {projects.map((item, index) => (
              <motion.div
                key={index}
                className={styles.projectBox}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <button
                    className={styles.viewBtn}
                    onClick={() => setSelectedProject(item)}
                  >
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalCanvas}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className={styles.closeModal}
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className={styles.modalBody}>
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className={styles.modalText}>
                  <span className={styles.tag}>{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.desc}</p>
                  <p className={styles.detailedInfo}>
                    This project focuses on delivering high-performance results using
                    modern technology stacks and scalable architecture.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SoftwareDevelopment;