import React from "react";
import styles from "../../Styles/Main.module.css";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiCloud,
  FiZap,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Worldgalaxy from "./Animee";
import Breadcrumb from "../BreadCrumb";


const scrollConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.2 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServiceCard = ({ icon, title }) => (
  <motion.div className={styles.card} variants={fadeUp} {...scrollConfig}>
    <div className={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    <p>Scalable, secure and future-ready solutions tailored for your business.</p>
  </motion.div>
);

const steps = [
  { step: "01", emoji: "🔍", title: "Discovery", desc: "Understanding goals, users and challenges." },
  { step: "02", emoji: "💡", title: "Strategy", desc: "Planning the right approach with clarity." },
  { step: "03", emoji: "🚀", title: "Execution", desc: "Designing, developing and launching." },
  { step: "04", emoji: "⚙️", title: "Optimization", desc: "Improving performance and scaling." },
];

const servicesData = [
  { title: "Website Development", desc: "Custom, responsive and performance-focused websites.", path: "/services/WebDevelopment" },
  { title: "Digital Marketing", desc: "SEO, social media, and content strategies.", path: "/services/DigitalMarketing" },
  { title: "Mobile Applications", desc: "User-friendly Android & iOS apps.", path: "/services/MobileAppSection" },
  { title: "Graphic Design", desc: "Creative designs for brand identity.", path: "/services/GraphicDesign" },
  { title: "E-Commerce Solutions", desc: "Conversion-optimized online stores.", path: "/services/ProjectsFlip" },
  { title: "Software Development", desc: "ERP & custom software.", path: "/services/Software" },
];

export default function Services() {
  return (
    <>

      <div className={styles.wrapper}>
        <Breadcrumb />
        <div className={styles.galaxyLayer}>
          <Worldgalaxy />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.galaxyLayer}>
            <Worldgalaxy />
          </div>

          <section className={styles.hero}>
            <motion.h1 variants={fadeUp} {...scrollConfig}>
              Empowering Your <span>Digital Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false }}
            >
              Softnova builds powerful digital products that help businesses scale.
            </motion.p>
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
                <a href="/ImageCardSection">Get Started</a>
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

            <div className={styles.timeline}>
              <div className={styles.centerLine} />
              {steps.map((item, i) => (
                <motion.div
                  key={i}
                  className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className={styles.marker}>
                    <span className={styles.emoji}>{item.emoji}</span>
                  </div>
                  <div className={styles.content}>
                    <span className={styles.step}>{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className={styles.software}>
            <motion.h2 variants={fadeUp} {...scrollConfig}>
              <h1 className={styles.a1}>End-to-End IT Solutions</h1>
            </motion.h2>

            <div className={styles.softwareList}>
              {servicesData.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <motion.div
                    className={styles.softwareRow}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
              viewport={{ once: false }}
            >
              <Link to="/Contact" style={{ color: "inherit", textDecoration: "none" }}>
                Connect With Us
              </Link>
            </motion.button>
          </section>
        </div>
      </div> </>
  );
}
