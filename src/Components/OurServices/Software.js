import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Software.module.css";
import software1 from "../../images/Ourservices-images/erp.jpg";
import software2 from "../../images/Ourservices-images/Business.jpg";
import software3 from "../../images/Ourservices-images/Logistics.jpg";
import software4 from "../../images/Ourservices-images/Education.jpg";
import software5 from "../../images/Ourservices-images/Healthcare.jpg";
import software6 from "../../images/Ourservices-images/Finance.jpg";
import { ArrowRight, X } from "lucide-react";
import shan from "../../images/Ourservices-images/mobilefront.jpg";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "ERP System",
    image: software1,
    category: "Enterprise",
    desc: "A next-generation Enterprise Resource Planning system built to unify and automate every critical business operation within a single intelligent platform. From finance and procurement to human resources, inventory, and project management, the solution delivers complete operational visibility and process optimization. The platform features real-time reporting dashboards, workflow automation, centralized data management, and role-based access controls to improve productivity and decision-making. Designed with scalable cloud architecture and seamless third-party integrations, the ERP system helps enterprises reduce operational complexity, improve collaboration across departments, and accelerate business growth with data-driven insights."
  },

  {
    title: "Custom CRM",
    image: software2,
    category: "Business",
    desc: "A fully customized Customer Relationship Management platform engineered to strengthen customer engagement, improve sales efficiency, and streamline communication workflows. The system enables businesses to manage leads, automate follow-ups, track customer interactions, monitor sales pipelines, and generate advanced performance reports from a unified dashboard. Intelligent automation tools reduce manual tasks while improving response times and customer satisfaction. Built with a modern and intuitive interface, the CRM empowers teams to build long-term customer relationships, increase conversion rates, and drive sustainable business growth through personalized engagement strategies."
  },

  {
    title: "Inventory Manager",
    image: software3,
    category: "Logistics",
    desc: "A smart inventory and warehouse management solution designed to provide accurate real-time stock monitoring and seamless supply chain coordination. The platform supports barcode scanning, inventory forecasting, supplier management, automated stock alerts, purchase order tracking, and multi-location warehouse management. Advanced analytics and reporting tools help businesses optimize stock levels, minimize losses, and improve operational efficiency. Built with a responsive and scalable architecture, the system simplifies inventory control processes while ensuring faster order fulfillment and improved logistics performance across complex business environments."
  },

  {
    title: "School Management",
    image: software4,
    category: "Education",
    desc: "A comprehensive digital school management ecosystem developed to modernize academic administration and enhance communication between students, teachers, parents, and administrators. The platform includes modules for attendance tracking, student records management, online examinations, fee collection, timetable scheduling, assignment sharing, and performance analytics. Integrated communication tools enable real-time notifications and seamless collaboration within the institution. Designed with a secure and user-friendly interface, the system simplifies daily operations, improves academic transparency, and creates a more connected and efficient educational environment."
  },

  {
    title: "Hospital Portal",
    image: software5,
    category: "Healthcare",
    desc: "A secure and intelligent healthcare management portal developed to streamline hospital operations and improve patient care experiences. The platform enables efficient appointment scheduling, electronic medical record management, doctor-patient communication, staff coordination, billing automation, and pharmacy integration within a centralized system. Advanced security protocols ensure sensitive medical data remains protected while real-time monitoring tools help healthcare providers deliver faster and more accurate services. Designed to enhance operational efficiency and healthcare accessibility, the portal creates a seamless digital ecosystem for hospitals, clinics, and medical institutions."
  },

  {
    title: "Fintech App",
    image: software6,
    category: "Finance",
    desc: "A modern fintech application built to deliver secure, scalable, and user-centric digital financial services across mobile and web platforms. The application supports digital banking, instant fund transfers, smart expense tracking, payment gateway integration, e-wallet functionality, investment monitoring, and real-time transaction analytics. Advanced encryption technologies, fraud detection systems, and multi-layer authentication ensure maximum security for every transaction. Designed with high-performance architecture and intuitive user experiences, the fintech platform empowers users and businesses to manage finances efficiently while enabling fast, reliable, and secure digital payment ecosystems."
  },
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
              viewport={{ once: true, amount: 0.3 }}
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
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img loading="lazy" src={shan} alt="Software Development" />
            </motion.div>
          </div>
        </section>

        <section className={styles.wrapper}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>Our Software Portfolio</h2>
            <div className={styles.line}></div>
          </motion.div>

          <motion.div
            className={styles.projectsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((item, index) => (
              <motion.div
                key={index}
                className={styles.projectBox}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <img loading="lazy" src={item.image} alt={item.title} />
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
                <img loading="lazy" src={selectedProject.image} alt={selectedProject.title} />
                <div className={styles.modalText}>
                  <span className={styles.tag}>{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.desc}</p>
                
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