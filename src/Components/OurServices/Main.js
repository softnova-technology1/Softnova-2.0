import React from "react";
import styles from "../../Styles/Main.module.css";
import {
  FiCode,
  FiCloud,
  FiZap,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import { motion } from "framer-motion";
const steps = [
  { step: "01", emoji: "🔍", title: "Discovery", desc: "Understanding goals, users and challenges." },
  { step: "02", emoji: "💡", title: "Strategy", desc: "Planning the right approach with clarity." },
  { step: "03", emoji: "🚀", title: "Execution", desc: "Designing, developing and launching." },
  { step: "04", emoji: "⚙️", title: "Optimization", desc: "Improving performance and scaling." },
];
const servicesData = [
  {
    title: "Website Development",
    desc: "Custom, responsive and performance-focused websites crafted for your brand.",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media, PPC and content strategies that drive real growth.",
  },
  {
    title: "Mobile Applications",
    desc: "User-friendly Android & iOS apps built for scalability and engagement.",
  },
  {
    title: "Graphic Design",
    desc: "Creative designs that strengthen brand identity and visual impact.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Secure, scalable and conversion-optimized online stores.",
  },
  {
    title: "Software Development",
    desc: "ERP & custom software to automate and streamline business operations.",
  },
];

export default function Services() {
  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Empowering Your <span>Digital Future</span>
        </h1>
        <p>
          Softnova builds powerful digital products that help businesses scale,
          secure, and succeed in the modern world.
        </p>
      </section>

      {/* CORE SERVICES */}
      <section className={styles.services}>
        <span className={styles.subtitle}>WHAT WE OFFER</span>
        <h2>Our Core Services</h2>
        <div className={styles.line} />

        <div className={styles.serviceGrid}>
          <ServiceCard icon={<FiCode />} title="Custom Software" />
          <ServiceCard icon={<FiCloud />} title="Cloud Integration" />
          <ServiceCard icon={<FiZap />} title="AI Solutions" />
          <ServiceCard icon={<FiTrendingUp />} title="IT Consulting" />
          <ServiceCard icon={<FiShield />} title="Cybersecurity" />

          <div className={styles.cta}>
            <h3>Have a Project in Mind?</h3>
            <p>Let’s turn your idea into a powerful digital solution.</p>
            <a href="Web">Get Started</a>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
<section className={styles.workflow}>
  <span className={styles.eyebrow}>HOW WE WORK</span>

  <h2>
    Our Strategic <span>Workflow</span>
  </h2>

  <div className={styles.timeline}>
    {steps.map((item, i) => (
      <motion.div
        key={i}
        className={`${styles.timelineItem} ${
          i % 2 === 0 ? styles.left : styles.right
        }`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
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



      {/* SOFTWARE SERVICES */}
      <section className={styles.software}>
  <span className={styles.eyebrow}>OUR SOFTWARE SERVICES</span>

  <h2>End-to-End IT Solutions</h2>

  <p className={styles.softwareIntro}>
    We follow Agile and DevOps methodologies to deliver scalable,
    high-quality software with speed and reliability.
  </p>

  <div className={styles.softwareList}>
    {servicesData.map((item, i) => (
      <motion.div
        key={i}
        className={styles.softwareRow}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        viewport={{ once: true }}
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </div>

  <button className={styles.connectBtn}>Connect With Us</button>
</section>

    </div>
  );
}

const ServiceCard = ({ icon, title }) => (
  <div className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    <p>Scalable, secure and future-ready solutions tailored for your business.</p>
    <span className={styles.link}>Learn More →</span>
  </div>
);

const WorkflowCard = ({ emoji, title, step }) => (
  <div className={styles.workflowCard}>
    <div className={styles.workflowIcon}>{emoji}</div>
    <h3>{title}</h3>
    <p>Focused approach designed for measurable results.</p>
    <span className={styles.step}>STEP {step}</span>
  </div>
);
