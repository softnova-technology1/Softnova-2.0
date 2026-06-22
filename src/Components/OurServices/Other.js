import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Other.module.css";
import {
  Settings,
  Cpu,
  Database,
  Share2,
  ArrowRight,
  X,
} from "lucide-react";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import CareerHero from "./Otherpart";
const services = [
  {
    id: "01",
    title: "Business Automation",

    shortDesc:
      "Smart automation solutions designed to simplify workflows and improve operational efficiency.",

    fullDesc:
      "Transform repetitive and time-consuming business operations into intelligent automated workflows that increase efficiency, accuracy, and scalability across your organization. Our business automation solutions are designed to optimize processes such as approvals, reporting, invoicing, task management, customer interactions, and internal communication through centralized digital systems. By integrating advanced automation technologies and real-time monitoring tools, businesses can reduce operational costs, eliminate manual errors, accelerate productivity, and improve overall workflow performance. Built with scalable architecture and modern integrations, our automation platforms empower organizations to streamline complex operations while creating faster, smarter, and more connected business environments.",

    icon: <Settings size={32} />,
  },

  {
    id: "02",
    title: "AI & ML Solutions",

    shortDesc:
      "AI-powered systems that analyze data, automate decisions, and improve business intelligence.",

    fullDesc:
      "Leverage the power of Artificial Intelligence and Machine Learning to build advanced digital systems capable of learning, predicting, analyzing, and automating complex business operations. Our AI & ML solutions include predictive analytics, intelligent chatbots, recommendation systems, data classification engines, process optimization tools, and real-time business forecasting models designed to improve operational intelligence. By combining cutting-edge algorithms with scalable cloud infrastructure and real-time data processing, businesses can unlock actionable insights, enhance customer experiences, automate decision-making, and stay ahead in rapidly evolving digital markets. Our solutions are engineered to deliver innovation, efficiency, and long-term business transformation through intelligent automation and data-driven strategies.",

    icon: <Cpu size={32} />,
  },

  {
    id: "03",
    title: "API Integration",

    shortDesc:
      "Secure API integration services that connect applications and third-party platforms seamlessly.",

    fullDesc:
      "Create seamless digital connectivity across your business ecosystem with robust API integration solutions designed for performance, scalability, and security. We develop custom API architectures that enable smooth communication between enterprise applications, payment gateways, cloud platforms, CRM systems, ERP solutions, mobile applications, and third-party services. Our integration strategies help businesses automate workflows, synchronize data in real time, improve operational efficiency, and enhance cross-platform functionality without disrupting existing systems. Built with high-security standards and scalable infrastructure, our API solutions ensure reliable communication, faster data exchange, and seamless digital experiences across complex software environments.",

    icon: <Share2 size={32} />,
  },

  {
    id: "04",
    title: "Cloud Infrastructure",

    shortDesc:
      "Scalable cloud infrastructure solutions for secure storage, accessibility, and business growth.",

    fullDesc:
      "Build powerful cloud infrastructures that provide secure, scalable, and high-performance digital environments for modern businesses. Our cloud infrastructure solutions include cloud migration, server management, scalable deployment architectures, disaster recovery systems, data storage optimization, and infrastructure monitoring designed to support business growth and digital transformation. By leveraging advanced cloud technologies, organizations can improve operational flexibility, reduce infrastructure costs, ensure business continuity, and access mission-critical data securely from anywhere in the world. Designed with enterprise-grade security, performance optimization, and future-ready scalability, our cloud solutions help businesses achieve agility, reliability, and long-term digital success.",

    icon: <Database size={32} />,
  },
];

const OtherServices = () => {
  const [activeCanvas, setActiveCanvas] = useState(null);

  const openCanvas = (service) => {
    setActiveCanvas(service);
    document.body.style.overflow = "hidden";
  };

  const closeCanvas = () => {
    setActiveCanvas(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Breadcrumb />

      <section className={styles.section}>
        <CareerHero />

        <div className={styles.container}>
          <div className={styles.listWrapper}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={styles.listItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.listContent}>
                  <span className={styles.id}>{service.id}</span>

                  <div className={styles.iconBox}>{service.icon}</div>

                  <div className={styles.textDetails}>
                    <h3>{service.title}</h3>
                    <p>{service.shortDesc}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className={styles.exploreBtn}
                  onClick={() => openCanvas(service)}
                >
                  Learn More <ArrowRight size={20} />
                </motion.button>

                <div className={styles.hoverBg}></div>
              </motion.div>
            ))}
          </div>

          <div className={styles.footerAction}>
            <button className={styles.cta}>
              <Link
                to="/Contact"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Connect With Us
              </Link>
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCanvas && (
          <motion.div
            className={styles.canvasOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.closeCanvas} onClick={closeCanvas}>
              <X size={30} /> <span>Remove</span>
            </button>

            <div className={styles.canvasContent}>
              <motion.div
                className={styles.glassCard}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                }}
              >
                <div className={styles.canvasIcon}>
                  {activeCanvas.icon}
                </div>

                <span className={styles.canvasTag}>
                  Premium Service {activeCanvas.id}
                </span>

                <h2 className={styles.canvasTitle}>
                  {activeCanvas.title}
                </h2>

                <p className={styles.canvasDesc}>
                  {activeCanvas.fullDesc}
                </p>

                <div className={styles.techStack}>
                  <span>Dynamic</span> • <span>Scalable</span> •{" "}
                  <span>Secure</span>
                </div>

                <button
                  className={styles.canvasBackBtn}
                  onClick={closeCanvas}
                >
                  Back to Services
                </button>
              </motion.div>
            </div>

            <div className={styles.canvasParticles}>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.blob}
                  animate={{
                    x: [0, Math.random() * 150, -150, 0],
                    y: [0, Math.random() * 150, -150, 0],
                    scale: [1, 1.2, 0.8, 1],
                  }}
                  transition={{
                    duration: 15 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OtherServices;