import React, { memo } from "react";
import styles from "../../Styles/Main.module.css";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiCloud,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiSearch,
  FiCompass,
  FiCpu,
  FiSettings,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Worldgalaxy from "./Animee";
import Breadcrumb from "../BreadCrumb";

const scrollConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServiceCard = memo(({ icon, title }) => (
  <motion.div className={styles.card} variants={fadeUp} {...scrollConfig}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>Scalable, secure and future-ready solutions tailored for your business.</p>
    </div>
  </motion.div>
));

const steps = [
  { step: "01", icon: <FiSearch />, title: "Discovery", desc: "Understanding goals, users and challenges." },
  { step: "02", icon: <FiCompass />, title: "Strategy", desc: "Planning the right approach with clarity." },
  { step: "03", icon: <FiCpu />, title: "Execution", desc: "Designing, developing and launching." },
  { step: "04", icon: <FiSettings />, title: "Optimization", desc: "Improving performance and scaling." },
];

const servicesData = [
  { title: "Website Development", desc: "Custom, responsive and performance-focused websites.", path: "/services/WebDevelopment" },
  { title: "Digital Marketing", desc: "SEO, social media, and content strategies.", path: "/services/DigitalMarketing" },
  { title: "Mobile Applications", desc: "User-friendly Android & iOS apps.", path: "/services/MobileAppSection" },
  { title: "Graphic Design", desc: "Creative designs for brand identity.", path: "/services/GraphicDesign" },
  { title: "E-Commerce Solutions", desc: "Conversion-optimized online stores.", path: "/services/ECommerce" },
  { title: "Software Development", desc: "ERP & custom software.", path: "/services/SoftwareDevelopment" },
];

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <Breadcrumb />
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <motion.h1 variants={fadeUp} {...scrollConfig}>
              Empowering Your <br /><span>Digital Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Softnova builds powerful digital products that help businesses scale.
            </motion.p>
          </div>
          <div className={styles.galaxyLayer}>
            <Worldgalaxy />
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <motion.span className={styles.subtitle} variants={fadeUp} {...scrollConfig}>
          WHAT WE OFFER
        </motion.span>

        <motion.h2 variants={fadeUp} {...scrollConfig}>
          Our Core Services
        </motion.h2>

        <div className={styles.line} />

        <div className={styles.serviceGrid}>
          <ServiceCard icon={<FiCode />} title="Custom Software" />
          <ServiceCard icon={<FiCloud />} title="Cloud Integration" />
          <ServiceCard icon={<FiZap />} title="AI Solutions" />
          <ServiceCard icon={<FiTrendingUp />} title="IT Consulting" />
          <ServiceCard icon={<FiShield />} title="Cybersecurity" />

          <motion.div className={styles.cta} variants={fadeUp} {...scrollConfig}>
            <h3>Have a Project in Mind?</h3>
            <p>Let’s turn your idea into reality.</p>
            <Link to="/ImageCardSection">Get Started</Link>
          </motion.div>
        </div>
      </section>
      <section className={styles.workflow}>
        <motion.span className={styles.eyebrow} variants={fadeUp} {...scrollConfig}>
          OUR STRATEGY
        </motion.span>

        <motion.h2 variants={fadeUp} {...scrollConfig}>
          Our Strategic <span>Workflow</span>
        </motion.h2>

        <div className={styles.workflowGrid}>
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className={styles.workflowCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className={styles.workflowContent}>
                <span className={styles.workflowIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className={styles.software}>
        <motion.span className={styles.eyebrow} variants={fadeUp} {...scrollConfig}>
          WHAT WE DO
        </motion.span>
        <motion.h2 variants={fadeUp} {...scrollConfig}>
          End-to-End <span>IT Solutions</span>
        </motion.h2>

        <div className={styles.solutionGrid}>
          {servicesData.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.div
                className={styles.solutionCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.solTop}>
                  <span className={styles.solNumber}>{(i + 1).toString().padStart(2, "0")}</span>
                  <FiArrowUpRight className={styles.solIcon} />
                </div>
                <div className={styles.solBottom}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.button
          className={styles.connectBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/Contact" style={{ color: "inherit", textDecoration: "none" }}>
            Connect With Us
          </Link>
        </motion.button>
      </section>
    </div>
  );
}
